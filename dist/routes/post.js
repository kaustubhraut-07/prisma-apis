import Router from "express";
import { createPost, deletePost, updatePost, getPostDetails } from "../controllers/post.js";
const router = Router();
router.post("/createpost", createPost);
router.put("/updatepost/:id", updatePost);
router.get("/postdetails", getPostDetails);
router.delete("/deletepost/:id", deletePost);
// router.get("/userdetails", getAllusers);
export default router;
