import authRouter from './auth.router';
import { Router } from "express";
import membersRouter from './members.routers'
const router = Router()

router.use('/auth', authRouter)
router.use('/members', membersRouter)
export default router;
