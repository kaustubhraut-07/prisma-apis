import Router from "express";
import { createuser, updateUser, deleteUser, getUserDetails } from "../controllers/user.js";
const router = Router();
router.post("/createuser", createuser);
router.put("/updateuser/:id", updateUser);
router.get("/userdetails/:id", getUserDetails);
router.delete("/deleteuser/:id", deleteUser);
export default router;
