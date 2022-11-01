import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien'
    })
});

router.post('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Mensaje por método POST'
    })
});

export default router;
