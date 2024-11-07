import {prisma} from "../db/db.client.js";
import { Request, Response } from "express";


export const createuser = async(req : any, res : any)=>{
    try{
        const {name , email, password} = req.body;

       const finduser = await prisma.user.findUnique({where : {email : email}});
       if(finduser){
        return res.status(400).send("user already exist");
       }
       const newuser = await prisma.user.create({
        data : {
            name : name,
            email : email,
            password : password
        }
       });
     return  res.status(200).json({"message" : "user created successfully" , "user" : newuser});
    }catch(err){
        console.log(err);
        return res.status(500).json({"message" : "something went wrong"});
    }
};


export const deleteUser = async(req : any, res : any) => {
    try{
        const {id} = req.params;
        const deleteduser = await prisma.user.delete({where : {id : Number(id)}});
        return res.status(200).json({"message" : "user deleted successfully" , "user" : deleteduser});
    }catch(error){
        console.log(error.message);
        return res.status(500).json({"message" : "something went wrong"});

    }
};

export const updateUser = async(req : any, res : any) => {
    try{
        const {id} = req.params;
        const {name, email, password} = req.body;
        const updateduser = await prisma.user.update({
            where : {id : Number(id)},
            data : {
                name : name,
                email : email,
                password : password
            }
        });
        return res.status(200).json({"message" : "user updated successfully" , "user" : updateduser});
    }catch(error){
        console.log(error.message);
        return res.status(500).json({"message" : "something went wrong"});
    }
};


export const getUserDetails = async(req : any, res : any) => {
    try{
        const {id} = req.params;
        const user = await prisma.user.findUnique({where : {id : Number(id)}}); 
        return res.status(200).json({"message" : "user details fetched successfully" , "user" : user});
    }catch(error){
        console.log(error.message);
        return res.status(500).json({"message" : "something went wrong"});
    }
};

