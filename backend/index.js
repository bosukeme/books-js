import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/books", booksRoute)

app.get("/", (req, res) => {
    res.status(200).send("Hey ");
})


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log(`connected to the db`);
        app.listen(PORT, console.log(`app is listening on port: ${PORT}`))
    })
    .catch((error) => {
        console.log(`Error connecting the db ${error}`);
        
    })


export default app;