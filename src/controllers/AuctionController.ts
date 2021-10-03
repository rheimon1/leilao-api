import { Request, Response } from 'express';
import { validate } from 'class-validator';
import { classToPlain, plainToClass } from 'class-transformer';
import { Auction } from '../entities/Auction';
import Controller from './helpers/Controller';
import { AuctionService } from '../services/AuctionService';

export default class AuctionController extends Controller {
  private auctionService: AuctionService;

  constructor(request: Request, response: Response) {
    super(request, response);
    this.auctionService = new AuctionService();
  }

  public async create(request: Request, response: Response) {
    try {
      const newAuction = plainToClass(Auction, request.body);
      const errors = await validate(newAuction, { validationError: { target: false } });
      console.log(errors);
      if (errors.length > 0) {
        return this.badRequest(errors);
      }
      const auction = await this.auctionService.createAuction(newAuction);
      return this.ok({ data: auction });
    } catch (error) {
      console.log(error);
      return this.serverError(error);
    }
  }

  public async getAll(request: Request, response: Response) {
    try {
      const auctions = await this.auctionService.getAllAuctions();
      return this.ok({ data: auctions });
    } catch (error) {
      console.log(error);
      return this.serverError(error);
    }
  }

  public async getById(request: Request, response: Response) {
    try {
      const { auctionId } = request.params;
      const auction = await this.auctionService.getAuctionById(auctionId);
      return this.ok({ data: auction });
    } catch (error) {
      return this.serverError(error);
    }
  }

  public async update(request: Request, response: Response) {
    try {
      const { auctionId } = request.params;
      const newAuction = new Auction();
      Object.assign(newAuction, request.body);
      const errors = await validate(classToPlain(newAuction), {
        validationError: { target: false },
      });
      if (errors.length > 0) {
        return this.badRequest(errors);
      }
      const auction = await this.auctionService.updateAuction(auctionId, { ...newAuction });
      return this.ok({ data: auction });
    } catch (error) {
      return this.serverError(error);
    }
  }

  public async delete(request: Request, response: Response) {
    try {
      const { auctionId } = request.params;
      const user = await this.auctionService.deleteAuction(auctionId);
      return this.ok({ data: user });
    } catch (error) {
      return this.serverError(error);
    }
  }
}
