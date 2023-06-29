import express from "express";
import { addUser, getUsers } from "../controller/user-controller.js";
import {
  newConversation,
  getConversation,
} from "../controller/conversation-controller.js";
import { newConversation } from "../controller/conversation-controller.js";

const route = express.Router();

route.post("/add", addUser);

route.get("/users", getUsers);

route.post("/conversation/add", newConversation);

route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);

export default route;
