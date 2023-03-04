export class Failure extends Error {
    public code = '';
    constructor(message: string, code: string | null = null) {
      super(message);
      if (code) {
        this.code = code;
      }
      Object.setPrototypeOf(this, new.target.prototype);
    }
  }


export class NotFoundFailure extends Failure {}
export class UnknownFailure extends Failure {}