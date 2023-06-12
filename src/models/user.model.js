import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            immutable: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            default: "https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50141.jpg",
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose?.models?.users || mongoose.model("users", userSchema);
