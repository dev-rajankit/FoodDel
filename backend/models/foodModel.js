import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)
// This checks if a model named “food” already exists in the mongoose.models object. If it does, it assigns that existing model to foodModel.

export default foodModel;