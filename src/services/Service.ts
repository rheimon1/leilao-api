import {
  EntityTarget, getMongoRepository, MongoRepository,
} from 'typeorm';

export default class Service<T> {
  private repository: MongoRepository<T>;

  constructor(entity: EntityTarget<T>) {
    this.repository = getMongoRepository(entity);
  }

  public async list(query?: any) {
    return this.repository.find();
  }

  public async create(data: T) {
    return this.repository.save(data);
  }

  public async getById(_id: any) {
    return this.repository.findOne(_id);
  }

  public async update(_id: any, data: any) {
    return this.repository.updateOne(_id, data);
  }

  public async delete(_id: any) {
    return this.repository.deleteOne(_id);
  }
}
