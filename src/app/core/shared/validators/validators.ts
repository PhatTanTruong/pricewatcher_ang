import { FormControl, FormGroup } from '@angular/forms';
import { ErrorMessageModel, ErrorMessageConstant, ErrorMessageCodeConstant } from './error-message.model';

export class CustomValidators {
  /**
   * Validate a field that can not be plain
   * @param customMessage Custom error message
   */
  static required = (customMessage?: string) => {
    return (control: FormControl): ErrorMessageModel => {
      if (control.value.length) {
        return null;
      }
      return new ErrorMessageModel(ErrorMessageCodeConstant.REQUIRED, customMessage || ErrorMessageConstant.required);
    };
  };

  /**
   * Validate email format
   * @param customMessage Custom error message
   */
  static emailFormat = (customMessage?: string) => {
    return (control: FormControl) => {
      /**
       * G1: start with alphabet charaters
       * G2: continute with any characters (alphabet, numberics and dot (.))
       * G3: a '@' character followed with any characters (alphabet)
       * G4: a '.' character followed with any characters (alphabet)
       * G5: (Optional group ) a '.' character followed with [1-5] characters (alphabet)
       */

      const regularExp = new RegExp('([A-Z]+)([A-Z\\d.]{0,})(@[A-Z]+)(\\.[A-Z]+)(\\.[A-Z]{1,5})?', 'gi');

      const match = control.value.match(regularExp);
      if (control.value === '' || (match && match[0].length === control.value.length)) {
        return null;
      }
      return new ErrorMessageModel(ErrorMessageCodeConstant.EMAIL, customMessage || ErrorMessageConstant.email);
    };
  };

  /**
   * Validate value of target field that equal with source field value
   * @param sourceControlName Source field for check
   * @param targetControlName Target field to check with source field
   * @param cusomMessage Custom error message
   */
  static matchValue = (sourceControlName: string, targetControlName: string, cusomMessage?: string) => {
    return (formGroup: FormGroup) => {
      const sourceValue = formGroup.controls[sourceControlName].value;
      const targetValue = formGroup.controls[targetControlName].value;

      // Matching
      if (sourceValue === targetValue || targetValue === '' || sourceValue === '') {
        // Having another error
        if (formGroup.controls[targetControlName].errors) {
          // matchValue error
          if (formGroup.controls[targetControlName].errors.code === ErrorMessageCodeConstant.MATCH) {
            // clear matchValue error
            formGroup.controls[targetControlName].setErrors(null);
            return null;
          } else {
            // return current error
            return formGroup.controls[targetControlName].errors;
          }
        }

        // Do not have any error else
        // clear all error
        formGroup.controls[targetControlName].setErrors(null);
        return null;
      }

      // Not matching
      if (
        formGroup.controls[targetControlName].errors &&
        formGroup.controls[targetControlName].errors.code !== ErrorMessageCodeConstant.MATCH
      ) {
        // Having another error
        // Return this error
        return formGroup.controls[targetControlName].errors;
      }

      // only not matchValue error
      formGroup.controls[targetControlName].setErrors(
        new ErrorMessageModel(
          ErrorMessageCodeConstant.MATCH,
          cusomMessage || ErrorMessageConstant.match(targetControlName, sourceControlName)
        )
      );

      return formGroup.errors;
    };
  };

  /**
   * Validate min length of a field
   * @param minLength Specify the number for min length
   * @param customMessage Custom error message
   */
  static minLength = (minLength: number | string, customMessage?: string) => {
    return (control: FormControl) => {
      if (control.value.length >= +minLength) {
        return null;
      }

      return new ErrorMessageModel(
        ErrorMessageCodeConstant.MIN_LENGTH,
        customMessage || ErrorMessageConstant.minLength(minLength)
      );
    };
  };
}
