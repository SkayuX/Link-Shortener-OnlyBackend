import app from './Router';
import { config } from 'dotenv';
import connectDB from './Functions'
config()

connectDB(process.env.MONGO_STRING)
app.listen(8080 || process.env.PORT, () => {
    console.log(`Express API Started at ${8080 || process.env.PORT}`)
})

process.on('uncaughtException', (err) => {
    console.log(`Whoops...! There was an uncaught exception => (${err.name}, ${err.message}, ${err.stack})`)
})