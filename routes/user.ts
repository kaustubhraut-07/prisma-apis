import Router from "express";
import  {createuser}  from "../controllers/user.js";


const router = Router();
router.post("/createuser", createuser);

export default router;