// features/product/productSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/product";

export interface Tag {
  name: string;
}

export interface Product {
  product: any;
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  points: number;
  tags: Tag[];
  isHighlighted: boolean;
  category: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  selectedProduct: Product | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  selectedProduct: null,
};

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (
    product: Omit<Product, "_id" | "createdAt" | "updatedAt">,
    thunkAPI
  ) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/create`, product);
      return res.data.data.product as Product;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message || "Create failed"
      );
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/all`);
      return res?.data?.data?.products as Product[];
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message || "Fetch failed"
      );
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: string, thunkAPI) => {
    try {
      await axios.delete(`${API_BASE_URL}/del/${id}`);
      return id;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message || "Delete failed"
      );
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (
    { id, updates }: { id: string; updates: Partial<Product> },
    thunkAPI
  ) => {
    try {
      const res = await axios.put(`${API_BASE_URL}/update/${id}`, updates);
      return res.data.data.product as Product;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message || "Update failed"
      );
    }
  }
);

export const getProductsByCategory = createAsyncThunk(
  "product/getProductsByCategory",
  async (category: string, thunkAPI) => {
    try {
      const res = await axios.put(`${API_BASE_URL}/getProByCat/${category}`);
      return res.data.data as Product[];
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message || "Category fetch failed"
      );
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id: string, thunkAPI) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/get/${id}`);
      return res.data.data as Product;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || err.message || "Fetch by ID failed"
      );
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    clearSelectedProduct(state) {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.loading = false;
          state.products.push(action.payload);
        }
      )
      .addCase(createProduct.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getAllProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.products = action.payload;
        }
      )
      .addCase(getAllProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        deleteProduct.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.products = state.products.filter(
            (product) => product._id !== action.payload
          );
        }
      )
      .addCase(deleteProduct.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.loading = false;
          const index = state.products.findIndex(
            (p) => p._id === action.payload._id
          );
          if (index !== -1) {
            state.products[index] = action.payload;
          }
        }
      )
      .addCase(updateProduct.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getProductsByCategory.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.products = action.payload;
        }
      )
      .addCase(
        getProductsByCategory.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      )

      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedProduct = null;
      })
      .addCase(
        getProductById.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.loading = false;
          state.selectedProduct = action.payload;
        }
      )
      .addCase(getProductById.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
