const express = require('express')
const {connect} = require('mongoose')
const authRouter = require('./authRouter')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        await connect(
            `mongodb+srv://pavel:worodef@cluster0.f2wbg.mongodb.net/AuthNodeJs?retryWrites=true&w=majority`,
            null,
            null)
        app.listen(PORT, () => console.log("server works " + PORT))
    } catch (e) {
        console.log(e)
    }
}

start()
