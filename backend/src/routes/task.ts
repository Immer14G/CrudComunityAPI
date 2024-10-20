import { Router, Request, Response } from 'express';

const router = Router();
//model
import Task from '../models/Task';
// Ruta para crear tareas
router.route('/create')
    .get((req: Request, res: Response) => {
        res.render('tasks/create');
    })
    .post((req: Request, res: Response) => {
        const { title, description } = req.body;
        const newTask = new Task({title,description});
        console.log(newTask)
        res.send('Task saved');
    });

export default router;



