import { Schema, model } from 'mongoose';
import { Auction } from '../../../entities/Auction';

const auctionSchema = new Schema<Auction>({
  productName: { type: String, required: true },
  startValue: { type: Number },
  startDate: { type: Date },
  endDate: { type: Date },
  minimumTime: { type: Number },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, {
  timestamps: true,
});

auctionSchema.loadClass(Auction);

export default model<Auction>('Auction', auctionSchema);
