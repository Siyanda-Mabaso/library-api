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
   // function to create new book 
   export const createNewBook= ( res:Response)=>{

    const{title,authorId,year}= req.body

    const newBook : Book ={
        id:books.length +1,
        title,authorId,year
    }
    books.push(newBook)
    res.status(201).json(newBook)
   }
   // function to delete the book

   export const deleteBook = ( req:Request,res:Response)=> {

    const{id} =req.params

    const index = books.findIndex((book)=> book.id === parseInt(id as string))
    if (index === -1){
        return res. status(404).json({massage: "Book not found"})
    }
    books.splice(index,1)
    res.status(200).json({massage:"Deleted"})
   }