import { serverHttp } from './http';
import './websocket';
import MongoHelper from '../infra/db/mongodb/MongoHelper';
import env from './config/env';

MongoHelper(env.mongoUrl);

serverHttp.listen(3000, () => console.log('Server is running on PORT 3000'));
