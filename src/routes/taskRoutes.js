import express from 'express';
import {getOneTask} from '../controllers/taskController.js'

export const routerTasks = express.Router();

routerTasks
    .get("/:taskID", getOneTask)