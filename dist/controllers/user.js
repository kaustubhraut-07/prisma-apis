import { prisma } from "../db/db.client.js";
export const createuser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const finduser = await prisma.user.findUnique({ where: { email: email } });
        if (finduser) {
            return res.status(400).send("user already exist");
        }
        const newuser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        });
        return res.status(200).json({ "message": "user created successfully", "user": newuser });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ "message": "something went wrong" });
    }
};
