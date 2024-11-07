import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import recordRoutes from './routes/recordRoutes.js' // Make sure the file extension is .js for ES Modules
import connectDB from './config/db.js' // Ensure your connectDB file exports the function as default or named export
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(cors())
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Connect to MongoDB
connectDB()

// Routes
app.use('/api/records', recordRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
