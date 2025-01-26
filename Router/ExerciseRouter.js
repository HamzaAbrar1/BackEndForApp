import { Router } from "express";
import { addExercise } from "../Controller/ExerciseController.js";

const router = Router();

router.post("/add", addExercise);

export default router;
