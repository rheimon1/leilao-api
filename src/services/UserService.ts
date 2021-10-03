import { getCustomRepository, getMongoRepository, MongoRepository } from 'typeorm';
import { User } from '../entities/User';
import { BcryptHash } from '../infra/BcryptHash';
import { UserRepository } from '../repositories/UserRepository';
import Service from './Service';

export class UserService extends Service<User> {
  private userRepository: MongoRepository<User>;
  private hasher: BcryptHash;

  constructor() {
    super(User);
    this.userRepository = getMongoRepository(User);
    const salt = 10;
    this.hasher = new BcryptHash(salt);
  }

  public async createUser(data: any) {
    const hashedPassword = await this.hasher.hash(data.password);
    const user = await this.create({ ...data, password: hashedPassword });
    return user;
  }

  public async getAllUsers() {
    return this.list();
  }

  public async getUserById(id: any) {
    return this.getById(id);
  }

  public async updateUser(id: any, data: any) {
    return this.update(id, data);
  }

  public async deleteUser(id: any) {
    return this.delete(id);
  }

  public async getUserByEmail(email: string) {
    return this.userRepository.findOne({ email });
  }
}
