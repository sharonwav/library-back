import { createMember } from "../controllers/member.controllers";
import { Router } from "express";
const router = Router();

router.post('/', createMember)

export default router;