import Excercise from "../Model/ExerciseModel.js";

const addExercise = async (req, res) => {
    try {
        const Resultant=await Excercise.create(req.body);
        return res.status(201).json({message:"Exercise Added Successfully",data:Resultant});
    }
    catch(e){
        console.log(e);
        return res.status(500).json({message:"Internal Server Error"}); 
    }
}
export {addExercise};