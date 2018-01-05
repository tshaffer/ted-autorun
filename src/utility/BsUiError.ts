export enum BsUiErrorType {
  unknownError,
  unexpectedError,
  invalidParameters,
  invalidOperation,
  apiError,
  invalidModel,
}

const baUwDmErrorMessage: {[type: number]: string} = {
  [BsUiErrorType.unknownError]: 'Unknown error',
  [BsUiErrorType.unexpectedError]: 'Unexpected error',
  [BsUiErrorType.invalidParameters]: 'Invalid parameters',
  [BsUiErrorType.invalidOperation]: 'Invalid operation attempt',
  [BsUiErrorType.apiError]: 'API error',
  [BsUiErrorType.invalidModel]: 'Invalid model',
};

export class BsUiError extends Error {
  name = 'BaUwDmError';
  type: BsUiErrorType;

  constructor(type: BsUiErrorType, reason?: string) {
    super();
    this.type = type;
    if (reason) {
      this.message = baUwDmErrorMessage[type] + ': ' + reason;
    } else {
      this.message = baUwDmErrorMessage[type];
    }
    Object.setPrototypeOf(this, BsUiError.prototype);
  }
}

export function isBsUiError(error: Error): error is BsUiError {
  return error instanceof BsUiError;
}
