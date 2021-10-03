import { Schema, model } from 'mongoose';
import { User } from '../../../entities/User';

export const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cpf: { type: String },
  password: { type: String, required: true, select: false },
  address: { type: String },
  auctions: [{ type: Schema.Types.ObjectId, ref: 'Auction' }],
}, {
  timestamps: true,
});

userSchema.loadClass(User);

export default model<User>('User', userSchema);
