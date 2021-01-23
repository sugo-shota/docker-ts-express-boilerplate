import { NextFunction, Request, RequestHandler, Response } from 'express';

type targetFunction = (req: Request) => Promise<any>;

export const wrap = (fn: targetFunction): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req)
      .then((data) => {
        res.json(data);
      })
      .catch((e: Error) => {
        res.status(500).json({
          name: e.name,
          message: e.message,
          stacktrace: e.stack,
        });
      });
  };
};
