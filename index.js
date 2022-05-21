
import Post from "./Post.js"
import express from "express"
import mongoose from "mongoose"
const PORT = 5000;
const DB_URL = `mongodb+srv://1234:1234@cluster0.p8vae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const app = express()



app.post('/', async (req,res) => {
    const {author,title,content,picture} = req.body
    const Post = await Post.create({author,title,content,picture})
    res.status(200).json('Сервер работает')
}) 
app.use(express.json())

async function startApp() {
    try {
        await mongoose.connect(DB_URL,{useUnifiedTopology:true, useNewUrlParser:true } )
        app.listen(PORT,() => console.log('SERVER STARTED ON PORT '+ PORT))
    } catch(e) {
        console.log(e)
    }




}

startApp()


