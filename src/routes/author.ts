import {Router ,Request, Response} from "express";
import {body, param, validationResult} from "express-validator";
import { getAllAuthors ,createNewAuthor, getAuthorById,deleteAuthor,updateAuthor} from "../controllers/authors";

const router = Router()

router.get("/", getAllAuthors)

router.post("/",[

], (req: Request, res: Response) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array})

    }
    createNewAuthor(req, res)

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
    getAuthorById(req, res)
})



router.delete("/:id", [
    param("id").isInt().withMessage("ID must be an integer"),
], (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    deleteAuthor(req, res)
})

router.put("/:id", [
    param("id").isInt().withMessage("ID must be an integer"),
    body("name").optional().notEmpty().withMessage("Name cannot be empty"),
], (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    updateAuthor(req, res)
})
export default router;