import { BcryptHash } from '../infra/BcryptHash';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
  private userRepository: UserRepository;
  private hasher: BcryptHash;

  constructor() {
    this.userRepository = new UserRepository();
    const salt = 10;
    this.hasher = new BcryptHash(salt);
  }

  public async createUser(data: any) {
    const hashedPassword = await this.hasher.hash(data.password);
    console.log(data);
    const user = await this.userRepository.create({ ...data, password: hashedPassword });
    return user;
  }

  public async getAllUsers() {
    return this.userRepository.find();
  }

  public async getUserById(id: any) {
    return this.userRepository.findOne(id);
  }

  public async updateUser(id: any, data: any) {
    return this.userRepository.update(id, data);
  }

  public async deleteUser(id: any) {
    return this.userRepository.delete(id);
  }

  public async getUserByEmail(email: string) {
    return this.userRepository.getUserByEmail(email);
  }
}
