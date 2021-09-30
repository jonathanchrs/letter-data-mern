import express from "express";
import mongoose from "mongoose";
import route from './routes/routes.js';
import cors from "cors";

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/letterdata_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (error) => {
    console.log(error)
})
db.once('open', () => {
    console.log('Database Connected')
})

app.use(cors());
app.use(express.json());
app.use(route);


app.listen('3000', () => {
    console.log('Server Running at port 3000');
})