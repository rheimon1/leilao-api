export interface IRead<T> {
  find(query?: any): Promise<T[]>;
  findOne(id: string): Promise<T>;
}
