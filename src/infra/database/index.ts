import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();
  const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB,
    MONGO_URL,
  } = process.env;

  const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

  console.log(MONGO_URL);

  const connection = {
    type: 'mongodb',
    url: MONGO_URL,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // ssl: true,
    authSource: 'admin',
    connectTimeoutMS: 10000,
    poolSize: 10,
    writeConcern: {
      j: true,
    },
    // replicaSet: 'Leilao-database-shard-0',
  };

  return createConnection(
    Object.assign(defaultOptions, connection),
  );
};
