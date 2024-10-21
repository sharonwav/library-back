import express, { Express, Request, Response } from "express";

const app: Express = express();
app.use(express.json())
const port = 1000;

app.get('/', (req: Request, res: Response) => {
    res.send('<p>You are on the server!</p>')
})

import router from "./routers";
app.use(router)

app.listen(port, () => {
    console.log(`You are on the server http://localhost:${port}`);
})