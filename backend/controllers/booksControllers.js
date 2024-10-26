import { Book } from "../models/booksModel.js";


// get all books
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            success: true,
            count: books.length,
            data: books
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: error.message})
    }
}

// create a book
export const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body)
        res.status(201).json({
            success: true,
            data: book
        })
    } catch (error) {
        // console.error(error.message);
        if (error.name === 'ValidationError') {
            return res.status(400).json({ success: false, message: 'Validation error', errors: error.errors });
        }
        res.status(500).json({message: error.message})
    }
}

// get a book
export const getBook = async (req, res) => {
    try {
        const { id:bookId } = req.params;

        const book = await Book.findById(bookId)

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).json({
            success: true,
            data: book
        });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: error.message});
    }
}

// update book 
export const  updateBook = async (req, res) => {
    try {

        const {id:bookId} = req.params;
        const body = req.body

        const book = await Book.findByIdAndUpdate(bookId, body, {new: true})

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).json({
            success: true,
            data: book
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({success: false, message: error.message});
    }
}

// delete a book
export const deleteBook = async (req, res) => {
    
    try {
        const {id:bookId} = req.params;

        const book = await Book.findByIdAndDelete(bookId);
    
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).json({
            success: true,
            message: 'Book deleted successfully'
        });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({success: false, message: error.message})
    }
}