import express, { Express, Request, Response } from "express";
import cors from 'cors'
const app: Express = express();
app.use(express.json())
const port = 1000;

app.get('/', (req: Request, res: Response) => {
    res.send('<p>You are on the server!</p>')
})
let whiteList = ['http://localhost:1000']
app.use(cors({
  origin: '*'
}))
import router from "./routers";
app.use(router)
app.listen(port, () => {
    console.log(`You are on the server http://localhost:${port}`);
})