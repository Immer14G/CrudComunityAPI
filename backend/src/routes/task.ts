import { Router, Request, Response } from 'express';
import Task from '../models/Task';

const router = Router();

// Ruta para crear tareas
router.route('/create')
    .get((req: Request, res: Response) => {
        res.render('tasks/create');
    })
    .post(async (req: Request, res: Response) => {
        const { title, description } = req.body;
        if(!title && !description){res.status(500).json({mjs:"titleanddescriptionisrequired"})}

        const newTask = new Task({ title, description });
        await newTask.save();
        res.redirect('/tasks/list'); 
    });

// Ruta para listar tareas
router.route('/list')
    .get(async (req: Request, res: Response) => {
        const tasks = await Task.find().lean();
        res.render('tasks/list', { tasks });
    });

// Ruta para eliminar tareas
router.route('/delete/:id')
    .get(async (req: Request, res: Response) => {
        const id = req.params.id;
        await Task.findByIdAndDelete(id);
        res.redirect("/tasks/list");
    });

// Ruta para editar tareas
router.route('/edit/:id')
    .get(async (req: Request, res: Response) => {
        const { id } = req.params; 
        const task = await Task.findById(id).lean(); 
        res.render('tasks/edit', { task }); 
    })
    .post(async (req: Request, res: Response) => {
        const { id } = req.params;
        const { title, description } = req.body;
        await Task.findByIdAndUpdate(id, { title, description });
        res.redirect('/tasks/list'); 
    });

export default router;



