import mongoose from 'mongoose';

export default (uri: string) => {
  const connect = () => {
    mongoose
      .connect(uri, { })
      .then(() => console.log(`Successfully connected to ${uri}`))
      .catch((error) => {
        console.log('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
