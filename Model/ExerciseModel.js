import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
bodyPart:{
    type:String,
    required:true
},
equipment:{
    type:String,
    required:true
},
gifUrl:{
    type:String,
    required:true
},
name:{
    type:String,
    required:true
},
target:{
    type:String,
    required:true
},
secondaryMuscles:[
    {
        type:String,
    }
],
instructions:[
    {
        type:String,
    }
]
}

);

const Excercise=mongoose.model("Excercise",exerciseSchema);

export default Excercise;