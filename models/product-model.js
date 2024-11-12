import mongoose, { Schema } from "mongoose"

const productSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    thumbnailUrl: {
        required: true,
        type: String
    },
    gallery: {
        required: true,
        type: Array
    },
    availability: {
        required: true,
        type: String
    },
    stock: {
        required: true,
        type: Number
    },
    brand: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    sku: {
        required: true,
        type: String
    },
    shortDescription: {
        required: true,
        type: String
    },
    longDescription: {
        required: true,
        type: Array
    },
    order: {
        required: false,
        type: Number
    },
    isActive: {
        required: false,
        type: Boolean
    }
});

export const productModel = mongoose.models.products ?? mongoose.model("products", productSchema);

