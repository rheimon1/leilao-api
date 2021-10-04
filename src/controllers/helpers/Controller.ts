import { Request, Response } from 'express';
import { ServerError } from '../errors/ServerError';
import { UnauthorizedError } from '../errors/UnauthorizedError';

export default class Controller {
  public request: Request;
  public response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }

  ok(data?: any) {
    const response = {};
    if (data) Object.assign(response, data);
    return this.response.json({
      body: response,
    });
  }

  badRequest(error: any) {
    return this.response.status(400).json({
      body: {
        error,
      },
    });
  }

  serverError(error: Error) {
    return this.response.status(500).json({
      body: {
        error: new ServerError(error.stack),
      },
    });
  }

  unauthorized() {
    return this.response.status(401).json({
      body: {
        error: new UnauthorizedError(),
      },
    });
  }
}
