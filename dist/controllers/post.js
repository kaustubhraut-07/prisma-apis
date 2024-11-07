import { prisma } from "../db/db.client.js";
export const createPost = async (req, res) => {
    try {
        const { user_id, title, Description } = req.body;
        const newPost = await prisma.post.create({
            data: {
                user_id: Number(user_id),
                title: title,
                Description: Description
            }
        });
        const responsePost = {
            ...newPost,
            comment_cout: newPost.comment_cout.toString()
        };
        return res.status(200).json({ "message": "Post created successfully", "user": responsePost });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "something went wrong" });
    }
};
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const postExists = await prisma.post.findUnique({
            where: { id: Number(id) }
        });
        if (!postExists) {
            return res.status(404).json({ "message": "Post not found" });
        }
        const deletePost = await prisma.post.delete({
            where: { id: Number(id) }
        });
        const responsePost = {
            ...deletePost,
            comment_cout: deletePost.comment_cout.toString()
        };
        return res.status(200).json({ "message": "Post deleted successfully", "user": responsePost });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ "message": "something went wrong" });
    }
};
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { user_id, title, Description } = req.body;
        const updateduser = await prisma.post.update({
            where: { id: Number(id) },
            data: {
                title: title,
                Description: Description,
                user_id: Number(user_id)
            }
        });
        const responsePost = {
            ...updateduser,
            comment_cout: updateduser.comment_cout.toString()
        };
        return res.status(200).json({ "message": "user updated successfully", "user": responsePost });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ "message": "something went wrong" });
    }
};
export const getPostDetails = async (req, res) => {
    try {
        // const {id} = req.params;
        const { user_id } = req.body;
        const postsofuser = await prisma.post.findMany({ where: { user_id: Number(user_id) } });
        const responsePosts = postsofuser.map(post => ({
            ...post,
            comment_cout: post.comment_cout.toString()
        }));
        return res.status(200).json({ "message": "user details fetched successfully", "post": responsePosts });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ "message": "something went wrong" });
    }
};
