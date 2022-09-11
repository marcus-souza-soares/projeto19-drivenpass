import { Router } from "express";
import {
  getCards,
  getUniqueCard,
  createCard,
  deleteCard,
} from "../controllers/cardsController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { schemaValidate } from "../middlewares/validateSchema.js";
import { cardSchema } from "../schemas/cardSchema.js";

const credentialRouter = Router();

credentialRouter.get("/cards", authMiddleware, getCards);
credentialRouter.post(
  "/insert/card",
  authMiddleware,
  schemaValidate(cardSchema),
  createCard
);
credentialRouter.get("/card/:id", authMiddleware, getUniqueCard);
credentialRouter.delete("/card/delete/:id", authMiddleware, deleteCard);

export default credentialRouter;
