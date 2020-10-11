export class ErrorMessageModel {
  code: string;
  message: string;

  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
  }
}

export const ErrorMessageConstant = {
  required: 'This field is required',
  match: (targetName: string, sourceName: string) => `${targetName} value do not math with ${sourceName}`,
  minLength: (minLength) => `This field must be more than ${minLength} characters`,
  email: 'Wrong email format!'
};

export const ErrorMessageCodeConstant = {
  REQUIRED: 'Required',
  MATCH: 'Match',
  MIN_LENGTH: 'MinLength',
  EMAIL: 'Email'
};
