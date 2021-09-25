import { Schema } from 'mongoose';

const schema = new Schema({
  productName: String,
  startValue: Number,
  startDate: Date,
  endDate: Date,
  minimumTime: Number,
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

export default schema;
