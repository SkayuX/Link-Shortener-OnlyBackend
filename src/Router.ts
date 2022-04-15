import express from 'express';
import Router from './Routes'
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors({
    origin: '*',
}))
app.use('/api', Router)

export default app;
