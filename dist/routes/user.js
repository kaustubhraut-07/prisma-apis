import Router from "express";
import { createuser, updateUser, deleteUser, getUserDetails, getAllusers } from "../controllers/user.js";
const router = Router();
router.post("/createuser", createuser);
router.put("/updateuser/:id", updateUser);
router.get("/userdetails/:id", getUserDetails);
router.delete("/deleteuser/:id", deleteUser);
router.get("/userdetails", getAllusers);
export default router;
