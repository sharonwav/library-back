import { Request, Response } from "express";
import db from "../../connection";
import { promisify } from "util";
const query = promisify(db.query).bind(db)
import {format, isAfter, isBefore} from 'date-fns';
import { IStaffs } from "./types";

interface IShift extends IStaffs{
    shift: number,
    start_time: string,
    end_time: string,
}

export const auth = async(req: Request, res: Response) => {
    try {
        const {email, password} = req.body

        const findStaff = await query({
            sql: `SELECT * FROM staff
            JOIN shift_has_Staff ON staff.id = shift_has_staff.staff_id
            JOIN shift ON shift_has_staff.shift_id = shift.id
            WHERE email = ? AND password = ?`,
            values: [email, password]
        }) as IShift[]

        const checkStaffSchedule = isAfter(format(new Date(), 'yyy-MM-dd kk:mm:ss'), `${format(new Date(), 'yyyy-MM-dd')} ${findStaff[0].start_time}`)
        && isBefore(format(new Date(), 'yyyy-MM-dd kk:mm:ss'), `${format(new Date(), 'yyyy-MM-dd')} ${findStaff[0].end_time}`)

        if(checkStaffSchedule === false) throw {message: 'Sign in failed!'}

        res.status(200).json({
            error: false,
            message: 'Successfully signed in!',
            data: {
                id: findStaff[0].id,
                email: findStaff[0].email,
                password: findStaff[0].password,
                role: 'Staff'
            }
        })
        
    } catch (error: any) {
        res.status(error.status || 500).json({
            error: true,
            message: error.message,
            data: {}
        })
    }
}

