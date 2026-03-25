import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : String,
    dueDate : Date,
    status : {
        type : String,
        enum : ["todo" , "in-process","done"],
        default : "todo"
    },
    priority : {
        type : String,
        enum : ["low" , "medium" , "high"]
    }
},{timestamps : true});

const Task = mongoose.model("Task", taskSchema)

export default Task;