import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors, } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AuthService } from "../_services/auth.service";
@Injectable({
  providedIn: 'root'
})
export class UniqueusernameService implements AsyncValidator {
  private baseUrl = 'https://api.angular-email.com';
  authService: any;
  constructor(private http: HttpClient) { }

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors> | Observable<ValidationErrors> {
    return this.authService.usernameAvailable(control.value).pipe(
      filter((response:any) => response.available),
      map((response) => {
        return null;
      }),
      catchError((error) => {
        if (error.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ unknownError: true });
        }
      })
    ); // {avilable : true} // {username: 'username is user'}
  }
}
