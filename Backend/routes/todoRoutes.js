import { Router } from "express";

const todoRouter = Router();

todoRouter
  .route("/notes")
  .get((req, res) => {
    res.send("Get all notes");
  })
  .post((req, res) => {
    res.send("Create a note");
  });
todoRouter
  .route("/notes/:id")
  .patch((req, res) => {
    res.send("Edit a note");
  })
  .delete((req, res) => {
    res.send("Delete a note");
  });

export default todoRouter;
