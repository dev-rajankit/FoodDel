import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ankitraj:ankit1625@cluster0.xqvzx0j.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}