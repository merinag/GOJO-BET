import express from 'express';

import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import authRouter from "./routes/auth.route.js"
import listingRouter from './routes/listing.route.js';
import path from 'path';
dotenv.config();
const __dirname = path.resolve()
const app = express();

app.use(cors({ origin: '*' }));

mongoose.connect(process.env.MONGO, { family: 4 }, { useUnifiedTopology: true })


const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'));


app.use(express.json());

app.use('/api/user', userRouter);
app.use("/api/auth", authRouter)
app.use('/api/listing', listingRouter);



app.listen(3000, () => {
    console.log('runnnnning!!!!')
})

app.use(express.static(path.join(__dirname, '/client/dist')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
