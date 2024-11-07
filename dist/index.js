import express from "express";
// import userRouter from "../routes/user.js"
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// app.use("/user", userRouter);
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
