import { User } from './User';

export class Auction {
  constructor(
    productName: string,
    startValue: number,
    startDate: Date,
    endDate: Date,
    minimumTime: number,
    users: User[],
  ) {
    this.productName = productName;
    this.startValue = startValue;
    this.startDate = startDate;
    this.endDate = endDate;
    this.minimumTime = minimumTime;
    this.user = user;
  }

    productName: string;
    startValue: number;
    startDate: Date;
    endDate: Date;
    minimumTime: number;
    user?: User[];
}
