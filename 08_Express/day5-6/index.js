import express from 'express';
import Connect from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import Categoryroute from './routes/CategoryRoute.js';
import productRoute from './routes/ProductRoute.js';
import UserRoute from './routes/UserRoute.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

Connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(path.resolve(), '/uploads')));

const allowedOrigins = ['http://localhost:5173'];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

app.use('', UserRoute);
app.use('', Categoryroute);
app.use('', productRoute);

app.get('/', (req, res) => {
  res.send('<h1>Hello world! My name is Shishir Bhandari</h1>');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
