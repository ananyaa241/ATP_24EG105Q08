import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { ArticleModel } from "../models/ArticleModel.js";
import { verifyToken } from "../middlewares/VerifyToken.js";

export const adminApp = exp.Router();


//Read all users
adminApp.get("/users", verifyToken("ADMIN"), async (req, res) => {

  const usersList = await UserModel.find();

  res.status(200).json({ message: "users", payload: usersList });
});


//Deactivate user
adminApp.patch("/users", verifyToken("ADMIN"), async (req, res) => {

  const { userId, isUserActive } = req.body;

  const user = await UserModel.findById(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.isUserActive = isUserActive;

  await user.save();

  res.status(200).json({ message: "User status updated", payload: user });
});


//Read all articles
adminApp.get("/articles", verifyToken("ADMIN"), async (req, res) => {

  const articlesList = await ArticleModel.find()
    .populate("author", "firstName email");

  res.status(200).json({ message: "articles", payload: articlesList });
});


//Delete any article
adminApp.delete("/articles/:articleId", verifyToken("ADMIN"), async (req, res) => {

  const { articleId } = req.params;

  const deletedArticle = await ArticleModel.findByIdAndDelete(articleId);

  if (!deletedArticle) {
    return res.status(404).json({ message: "Article not found" });
  }

  res.status(200).json({ message: "Article deleted", payload: deletedArticle });
});