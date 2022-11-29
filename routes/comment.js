const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//comment Routes

router.post("/createComment/:id", commentController.createComment);

router.put("/likeComment/:id", commentController.likeComment);

router.delete("/deleteComment/:id", commentController.deleteComment);

module.exports = router;

