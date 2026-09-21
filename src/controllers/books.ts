import { Request, Response } from "express";
import { Book } from "../bookModel";

let books : Book[] =[]
// function to get all books
export const getAllBooks = (req: Request, res: Response) => {
    res.status(200).json(books);
};
   // function to get book by the Id

   export const getBookById = (req : Request, res: Response) =>{
    const {id} = req.params

    const book = books.find((book) => book.id === parseInt(id as string))
    if (!book){
        return res.status(404).send("Book not found")
    }
    res.status(200).json(book)
   }