import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/db/connect.js';
import cookieParser from 'cookie-parser';
import fs from 'node:fs';


dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

//middlewares
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
const routesFiles = fs.readdirSync('./src/routes');

routesFiles.forEach((file) => {
    //use dynamic import
    import(`./src/routes/${file}`).then((route) => {
        app.use('/api/v1', route.default);
    })
    .catch((err) => {
        console.log("Failed to import route", err.message);
    });
}
);

const server =async () => {
    try {

        await connectDB();
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log("Failed to start server",error.message);
    }
};
server();