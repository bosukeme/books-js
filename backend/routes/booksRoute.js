import express from "express";

import { 
    getAllBooks,
    createBook,
    getBook,
    updateBook,
    deleteBook
} from "../controllers/booksControllers.js";

import validateObjectId from '../middleware/validateObjectId.js';

const router = express.Router();


router.get("/", getAllBooks)
router.post("/", createBook)
router.get("/:id", validateObjectId, getBook)
router.put("/:id", validateObjectId, updateBook)
router.delete("/:id", validateObjectId, deleteBook)



export default router;