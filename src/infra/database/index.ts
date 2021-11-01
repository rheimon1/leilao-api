import mongoose from 'mongoose';

export default async (config: any) => {
  let credentials = '';

  if (config.auth) {
    credentials = `${config.user}:${config.password}`;
  }

  let url = '';
  if (!config.mongoUrl) {
    url = `mongodb://${credentials}${config.host}:${config.port}/${config.database}`;
  } else {
    url = config.mongoUrl;
  }

  const options = {
    useNewUrlParser: true,
    connectTimeoutMS: 10000,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(url, options);

    console.log('Connected to database.');
  } catch (error) {
    console.log(error);
  }
};

// export default async (): Promise<Connection> => {
//   const defaultOptions = await getConnectionOptions();
//   const {
//     MONGO_USERNAME,
//     MONGO_PASSWORD,
//     MONGO_HOSTNAME,
//     MONGO_PORT,
//     MONGO_DB,
//     MONGO_URL,
//   } = process.env;

//   const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

//   console.log(defaultOptions);

//   const connection = {
//     type: 'mongodb',
//     url: MONGO_URL,
//     port: 27017,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // ssl: true,
//     authSource: 'admin',
//     // replicaSet: 'Leilao-database-shard-0',
//   };

//   return createConnection(
//     // Object.assign(defaultOptions, connection),
//     defaultOptions,
//   );
// };
