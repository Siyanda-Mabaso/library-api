import { Request , Response } from "express";
import { Author } from "../authorModel";

let authors : Author[] =[]

export const getAllAuthors =(req: Request, res:Response) => {
    res.status(200).json(authors)
}

export const getAuthorById = (req:Request, res:Response)=>{
    const {id} =req.params
    const author = authors.find((author) => author.id === parseInt(id as string))

    if(!author){
        return res.status(404).send("Author not found");
    }
    res.status(200).json(author)
}


export const createNewAuthor = (req: Request, res: Response) => {
    const { name} = req.body

    const newAuthor: Author = {
        id: authors.length + 1,
       name
    }

    authors.push(newAuthor)

    res.status(201).json(newAuthor)
}



export const deleteAuthor = (req: Request, res: Response) => {
    const { id } = req.params

    const index = authors.findIndex((author) => author.id === parseInt(id as string))

    if (index === -1) {
        return res.status(404).json({ message: "Author not found" })
    }

    authors.splice(index, 1)

    res.status(200).json({ message: "Deleted" })
}

export const updateAuthor = (req: Request, res: Response) => {
    const { id } = req.params
    const { name } = req.body

    const author = authors.find((author) => author.id === parseInt(id as string))

    if (!author) {
        return res.status(404).json({ message: "Author not found" })
    }

    res.status(200).json(author)
}