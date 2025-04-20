import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const port = process.env.PORT || 12000;

(async function () {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("atabase is connected successfully");
    }
    catch (e) {
        console.log(`could not connect t the db :${e.message}`);
    }
})();
// mongodb + srv://ashokpatel881095:12345678@@cluster0.uls7ax1.mongodb.net/
// mongodb+srv://ashokpatel881095:12345678@@cluster0.uls7ax1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.get("/", (req, res) => {
    res.send("Hello");
}
)
app.listen(port, (req, res) => {
    console.log(`your server is running on http://localhost:${port}`);
})






// PORT = 8000
// MONGO_URI = 'mongodb+srv://Form:formdata@cluster0.fb3wqwv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// JWT_SECRET = "hjsdjkjdjkdfjfsjk"