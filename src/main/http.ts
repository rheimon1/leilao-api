import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import 'dotenv';

import createConnection from '../infra/database';
import auctionRoutes from '../routes/AuctionRoutes';
import userRoutes from '../routes/UserRoutes';

const { MongoClient } = require('mongodb');

createConnection().then(() => console.log('tes')).catch((e) => console.log('rrrrrrrrrrrrr', e));
const app = express();

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

export { serverHttp, io };

// app.use(cors());
app.use(express.json());
app.use(auctionRoutes);
app.use(userRoutes);
