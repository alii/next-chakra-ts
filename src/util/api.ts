import { NextApiHandler } from "next";

type APIResponse<T> = T | { message: string; code: number };

export function api<T>(handler: NextApiHandler<T>): NextApiHandler<APIResponse<T>> {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (e) {
      const code = e instanceof HttpException ? e.code : 500;

      if (!(e instanceof HttpException)) {
        console.error(e);
      }

      res.status(code).json({ message: e.message, code });
    }
  };
}

export class HttpException extends Error {
  constructor(public readonly code: number, message: string) {
    super(message);
  }
}
