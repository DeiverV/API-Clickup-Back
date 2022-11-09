import express from 'express';
import {getAllComments} from '../controllers/commentsController.js'

export const routerComments = express.Router();

routerComments
    .get("/:taskID", getAllComments)