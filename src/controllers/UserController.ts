import { Request, Response } from 'express';
import { validate } from 'class-validator';
import { classToPlain, plainToClass } from 'class-transformer';
import { User } from '../entities/User';
import Controller from './helpers/Controller';
import { UserService } from '../services/UserService';

export default class UserController extends Controller {
  private userService: UserService;

  constructor(request: Request, response: Response) {
    super(request, response);
    this.userService = new UserService();
  }

  public async create(request: Request, response: Response) {
    try {
      const newUser = plainToClass(User, request.body);
      const errors = await validate(classToPlain(newUser), { validationError: { target: false } });
      if (errors.length > 0) {
        return this.badRequest(errors);
      }
      const emailExists = await this.userService.getUserByEmail(newUser.email);
      if (emailExists) return this.badRequest(`Já existe um usuário com email: ${newUser.email}`);
      const user = await this.userService.createUser(newUser);
      return this.ok({ data: user });
    } catch (error) {
      console.log(error);
      return this.serverError(error);
    }
  }

  public async getAll(request: Request, response: Response) {
    try {
      const users = await this.userService.getAllUsers();
      const data = classToPlain(users);
      return this.ok({ data });
    } catch (error) {
      console.log(error);
      return this.serverError(error);
    }
  }

  public async getById(request: Request, response: Response) {
    try {
      const { userId } = request.params;
      const user = await this.userService.getUserById(userId);
      const data = classToPlain(user);
      return this.ok({ data });
    } catch (error) {
      console.log(error);
      return this.serverError(error);
    }
  }

  public async update(request: Request, response: Response) {
    try {
      const { userId } = request.params;
      const newUser = new User();
      Object.assign(newUser, request.body);
      const errors = await validate(classToPlain(newUser), { validationError: { target: false } });
      if (errors.length > 0) {
        return this.badRequest(errors);
      }
      const user = await this.userService.updateUser(userId, { ...newUser });
      return this.ok({ data: user });
    } catch (error) {
      console.log(error);
      return this.serverError(error);
    }
  }

  public async delete(request: Request, response: Response) {
    try {
      const { userId } = request.params;
      const user = await this.userService.deleteUser(userId);
      return this.ok({ data: user });
    } catch (error) {
      console.log(error);
      return this.serverError(error);
    }
  }
}
