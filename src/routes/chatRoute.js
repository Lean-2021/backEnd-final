import { Router } from "express";
import ChatController from "../controllers/chatController.js";

const router = Router();

export default class ChatRouter {
  constructor() {
    this.chatController = new ChatController();
  }
  init = () => {
    router.get("/",this.chatController.getViewChat);
    return router;
  };
}
