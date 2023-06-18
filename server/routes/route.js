import express from "express";
import { addUser } from "../controller/user-controller.js";

const route = express.Router();

route.post("/add",addUser);

export default route;
