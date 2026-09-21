import { Router,Request,Response } from "express";
import{body,param,validationResult} from "express-validator"
import { createNewBook, deleteBook, getAllBooks, getBookById } from "../controllers/books";

const router = Router()
router.get("/",getAllBooks)
router.post("/",[

],(req:Request, res:Response)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array})
    }
    createNewBook(req,res)
}
)

router.get("/:id" ,
    [param("id").isInt().withMessage("Id must be an interger")],
    (req:Request , res: Response) =>{
        const errors = validationResult(req)
        console.log(errors , "Errors from express validator middleware")
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
    }
    getBookById(req, res)
})

router.delete("/:id",[
    param("id").isInt().withMessage( "Id must be an Integer"),
],(req:Request,res:Response)=>{
    const errors = validationResult(req)
    if (!errors. isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    deleteBook(req,res)
})
