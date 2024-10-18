import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;


mongoose 
.connect(MONGOURL)
.then(()=>{
    console.log("Connection Succefully");
    app.listen(PORT, ()=> {
        console.log(`Server running on port ${PORT}`);
    })
})
.catch(()=>{
    console.log("Error to connect database");
})