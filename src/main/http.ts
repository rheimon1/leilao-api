import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import 'dotenv/config';

import databaseConnection from '../infra/database';
import auctionRoutes from '../routes/AuctionRoutes';
import userRoutes from '../routes/UserRoutes';
import env from './config/env';

const app = express();

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

export { serverHttp, io };

app.use(cors());
app.use(express.json());
app.use(auctionRoutes);
app.use(userRoutes);

async function setUp() {
  await databaseConnection(env);
}

setUp();
