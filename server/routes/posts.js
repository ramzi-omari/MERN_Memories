import express from "express";
// we imports operations from controllers
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);

export default router;
