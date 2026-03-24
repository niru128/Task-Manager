import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONO_URI);
        console.log("MongoDB connected");
    }catch(error){
        console.log("Error in connecting MONGO ",error);
        process.exit(1);
    }
}

export default connectDB;