import mongoose from "mongoose";

const Category = {
     OfficeSupplies: "Office Supplies",
     Electronics: "Electronics",
     Gifts: "Gifts",
     Drinkware: "Drinkware",
     Stationery: "Stationery",
     Bags: "Bags",
     Other: "Other",
};

const tagSchema = new mongoose.Schema({
     name: { type: String, required: true },
});

const imageSchema = new mongoose.Schema({
     name: { type: String }
})

const featuresSchema = new mongoose.Schema({
     name: { type: String },
})

const productSchema = new mongoose.Schema(
     {
          name: { type: String, required: true },
          description: { type: String, required: true },
          images: [imageSchema],
          features: [featuresSchema],
          stock: { type: Number, required: true },
          price: { type: Number, required: true },
          points: { type: Number, required: true },
          tags: [tagSchema],
          isHighlighted: { type: Boolean, default: false },
          category: {
               type: String,
               enum: Object.values(Category),
               required: true,
          },
     },
     { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
