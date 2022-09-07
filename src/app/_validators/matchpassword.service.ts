import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MatchpasswordService implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null{
    const { password, passwordconfirmation } = control.value;
    if (password === passwordconfirmation) return null;
    return { passworddontmach: true };
  }
}
