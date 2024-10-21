import {Request, Response} from "express"
import db from "../../connection"
import { promisify } from "util"
const query = promisify(db.query).bind(db)
export const findBooks = async (req:Request,res:Response)=>{
    try {
        const { title } = req.query
        let books
        if(!title){
            books = await query({sql: `SELECT * FROM books`})
        }else{
            books = await query({
                sql: "SELECT * FROM books where title like ?",
                values: [`%${name}%`]
        })
        }
        res.status(200).json(
            {
               error:false,
               message:'Get Products Success',
               data: books
            }
        )
    } catch (error) {
        console.log(error)
    }
}
