import { Router } from "express";
import {
  getTransactions,
  addTransaction,
  deleteTransaction}
from "../controllers/transactions.js";

const transactionRouter = new Router();

transactionRouter.route("/").get(getTransactions).post(addTransaction);

transactionRouter.route("/:id").delete(deleteTransaction);

export default transactionRouter;
