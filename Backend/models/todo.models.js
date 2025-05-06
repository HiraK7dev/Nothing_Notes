import express from "express";
import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
