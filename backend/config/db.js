import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ankitraj:ankitraj7063@cluster0.alkq4yr.mongodb.net/food del').then(()=>console.log("DataBase Connected"));
}