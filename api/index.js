import express from "express"
import postRouter from './routes/posts.js '
import usersRouter from './routes/users.js '
import authRouter from './routes/auth.js '

const app = express()

app.use(express.json())
app.use("/api/posts/", postRouter)
app.use("/api/users/", usersRouter)
app.use("/api/auth/", authRouter)

app.get("/test", (req, res)=>{
    res.json("작동함")
})
app.listen(8800,() =>{
    console.log("연결됨")
})