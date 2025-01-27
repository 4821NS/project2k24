const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.json({
    "message": "server is alive"
  })
})

app.use("/api", router)

const PORT = 5000 || process.env.PORT


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connnected to DB")
    console.log("Server is running " + PORT)
  })
})
