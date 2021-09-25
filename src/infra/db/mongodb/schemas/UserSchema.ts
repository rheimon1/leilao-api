import { Schema } from 'mongoose';

const schema = new Schema({
  name: Number,
  email: Date,
  password: Date,
  auctions: [{ type: Schema.Types.ObjectId, ref: 'Auction' }],
});

export default schema;
