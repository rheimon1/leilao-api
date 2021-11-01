export interface IWrite<T> {
  create(item: any): Promise<T>;
  update(id: string, item: any): Promise<T>;
  delete(id: string): Promise<boolean>;
}
