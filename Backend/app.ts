import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import fs from "fs";
import jwt from "jsonwebtoken";

const app = express();

const users: { email: string; password: string }[] = [];

app.use(bodyParser({ extended: true }));
app.use(cors());

app.post("/register", (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password)
    res.status(400).json({ message: "Please fill up the fields" });

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const newUser = { email, password: hash };
  users.push(newUser);

  fs.writeFileSync("./data/user.json", JSON.stringify(users, null, 2));
  return res.status(200).json({ users, message: "success" });
});

app.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password)
    res.status(400).json({ message: "Please fill up the fields" });

  const existUser = users.find((user) => user.email === email);

  if (!existUser) res.status(401).json("Not valid email!");

  const validPassword = bcrypt.compareSync(password, existUser.password);

  if (!validPassword) res.status(401).json("Not valid password");
  const token = jwt.sign({ email }, "CY216K2ZShla7cAUBH0", { expiresIn: "1h" });

  return res.status(201).json({ message: "created user", token });
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
