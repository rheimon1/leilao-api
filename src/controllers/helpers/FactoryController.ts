import { Request, Response } from 'express';

export function factoryController(_Controller: any, methodName: string) {
  return (request: Request, response: Response) => {
    const controller = new _Controller(request, response);
    return controller[methodName](request, response);
  };
}
