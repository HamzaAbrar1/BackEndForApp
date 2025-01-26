import Express from 'express';
import exerciseRouter from './Router/ExerciseRouter.js';

const app=Express();
// Default Middleware Configuration
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
app.use(Express.static('public'));


// This is the exercise route
app.use('/exercise',exerciseRouter);

// this is a checking route
app.get('/',(req,res)=>{

   return  res.send('Hello World');
})

export default app;