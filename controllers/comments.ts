import { prisma } from "../db/db.client.js";
import { Request, Response } from "express";

export const getComments = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const comments = await prisma.comment.findMany({ where: { post_id: Number(id) } });
        return res.status(200).json({ "message": "comments fetched successfully", "comments": comments });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ "message": "something went wrong" });
    }
};


export const createComment = async (req: Request, res: Response) => {
    try {
        const { post_id, user_id, comment } = req.body;
        const newComment = await prisma.comment.create({
            data: {
                post_id: Number(post_id),
                user_id: Number(user_id),
                comment: comment
            }
        });
        return res.status(200).json({ "message": "comment created successfully", "comment": newComment });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ "message": "something went wrong" });
    }
};


export const updateComment = async (req: any, res: any) => {

    try {
        const { id } = req.params;
        const { comment } = req.body;
        const updatedcomment = await prisma.comment.update({
            where: { post_id: Number(id) },
            data: {
                comment: comment
            }
        });
        return res.status(200).json({ "message": "comment updated successfully", "comment": updatedcomment });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({ "message": "something went wrong" });
    }

};
