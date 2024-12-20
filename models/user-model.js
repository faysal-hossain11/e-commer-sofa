import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    avatar: {
        required: false,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
});

export const userModel = mongoose.models.users ?? mongoose.model("users", userSchema);