import { Router, Request, Response } from "express";

const router = Router();

// Ruta inicial del usuario
router.get('/', (req: Request, res: Response) => {
    res.render('index'); 
});

export default router;
