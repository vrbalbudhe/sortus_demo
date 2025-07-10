import { Product } from "../models/product.model.js";

/*
 * @function   : createProduct
 * @parameters : name,
               description,
               image,
               price,
               points,
               tags,
               isHighlighted,
               category
 * @author     : varun-balbudhe
 * @description: Register a new product
 */
export const createProduct = async (req, res) => {
     const { name, description, images, features, price, stock, points, tags, isHighlighted, category } = req.body;

     try {
          if (
               !name ||
               !description ||
               !images ||
               price === undefined ||
               points === undefined ||
               !tags ||
               !stock ||
               !features ||
               isHighlighted === undefined ||
               !category
          ) {
               return res.status(400).json({
                    status: 'false',
                    message: 'All parameters are required',
               });
          }

          const newProduct = await Product.create({
               name,
               description,
               images,
               price,
               points,
               stock,
               tags,
               features,
               isHighlighted,
               category,
          });

          if (!newProduct) {
               return res.status(500).json({
                    status: 'false',
                    message: 'Unable to create a product',
               });
          }

          return res.status(201).json({
               status: 'success',
               message: 'Product registered successfully',
               data: {
                    product: newProduct,
               },
          });
     } catch (error) {
          return res.status(500).json({
               status: 'false',
               message: 'Product not registered',
               error: error.message || error,
          });
     }
};


/*
 * @function   : getAllProducts
 * @author     : varun-balbudhe
 * @description: Get All Products 
 */
export const getAllProducts = async (req, res) => {
     try {
          const allProducts = await Product.find();
          if (allProducts) {
               res.status(200).json({
                    status: 'success',
                    message: 'All Product Fetched Successfully',
                    data: {
                         products: allProducts
                    }
               });
          }
     } catch (error) {
          res.status(501).json({
               status: 'false',
               message: 'Unable to Get All Products',
               error
          });
     }
}

/*
 * @function   : deleteProduct
 * @parameters : id
 * @author     : varun-balbudhe
 * @description: To Delete the specific product using the product id 
 */
export const deleteProduct = async (req, res) => {
     const { id } = req.params;
     try {
          if (!id) {
               return res.status(400).json({
                    status: 'false',
                    message: 'Product ID is required',
               });
          }

          const deleted = await Product.findByIdAndDelete(id);

          if (!deleted) {
               return res.status(404).json({
                    status: 'false',
                    message: 'Product not found',
               });
          }

          res.status(200).json({
               status: 'success',
               message: 'Product deleted successfully',
               data: {
                    product: deleted
               }
          });

     } catch (error) {
          res.status(501).json({
               status: 'false',
               message: 'Unable to delete the product',
               error
          });
     }
};

/*
 * @function   : updateProduct
 * @parameters : id
 * @author     : varun-balbudhe
 * @description: To Update the specific product using the product id 
 */
export const updateProduct = async (req, res) => {
     const { id } = req.params;
     const updateData = req.body;

     try {
          if (!id) {
               return res.status(400).json({
                    status: 'false',
                    message: 'Product ID is required',
               });
          }

          const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });

          if (!updatedProduct) {
               return res.status(404).json({
                    status: 'false',
                    message: 'Product not found',
               });
          }

          res.status(200).json({
               status: 'success',
               message: 'Product updated successfully',
               data: {
                    product: updatedProduct
               }
          });

     } catch (error) {
          res.status(501).json({
               status: 'false',
               message: 'Unable to update the product',
               error
          });
     }
};

/*
 * @function   : getProductsByCategory
 * @parameters : category
 * @author     : varun-balbudhe
 * @description: To Update the specific product using the product id 
 */
export const getProductsByCategory = async (req, res) => {
     const { category } = req.params;

     try {
          if (!category) {
               return res.status(400).json({
                    status: 'false',
                    message: 'Category is required',
               });
          }

          const products = await Product.find({ category });

          res.status(200).json({
               status: 'success',
               message: `Products in category: ${category}`,
               data: {
                    products
               }
          });

     } catch (error) {
          res.status(501).json({
               status: 'false',
               message: 'Unable to fetch products by category',
               error
          });
     }
};

/*
 * @function   : getProductById
 * @parameters : id
 * @author     : varun-balbudhe
 * @description: To get the specific product using the product id 
 */
export const getProductById = async (req, res) => {
     const { id } = req.params;

     try {
          if (!id) {
               return res.status(400).json({
                    status: 'false',
                    message: 'id is required',
               });
          }

          const product = await Product.findById( id );

          res.status(200).json({
               status: 'success',
               message: `Product Fetched Successfully!`,
               data: {
                    product
               }
          });

     } catch (error) {
          res.status(501).json({
               status: 'false',
               message: 'Unable to fetch product by Id',
               error
          });
     }
}