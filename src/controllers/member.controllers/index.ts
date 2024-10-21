import {Request, Response} from "express"
import db from "../../connection"
import { promisify } from "util"
import { v4 as uuidv4 } from 'uuid';
import { IMembers } from "./types";
const query = promisify(db.query).bind(db)
export const createMember = async(req: Request, res: Response) => {
    try {
        const { first_name, last_name,id_card, birth_date, gender } = req.body
        
        const id = `MMBR-${uuidv4()}-${new Date().getFullYear()}${new Date().getMonth()+1}${new Date().getDate()}`

        await query({
            sql: 'INSERT INTO member(id, first_name, last_name,id_card, birth_date, gender) VALUES(?, ?, ?, ?, ?, ?)',
            values: [id, first_name, last_name,id_card, birth_date, gender]
        })

        res.status(200).json({
            error: false, 
            message: 'Create Member Success', 
            data: { id, first_name, last_name,id_card, birth_date, gender}
        })
    } catch (error: any) {
        res.status(error.status || 500).json({
            error: true, 
            message: error.msg || error.message, 
            data: {}
        })
    }
}
