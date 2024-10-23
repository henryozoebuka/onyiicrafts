import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import usersRouter from './routes/usersRoute.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/', usersRouter)

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to database')
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`)
        })
    } catch (error) {
        console.error('Error connecting to database: ', error)
        process.exit(1)
    }
}

startServer();

// export const handler = serverless(app);