import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form = new FormGroup!({
    username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
    passwordconfirmation: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)])
  })

  constructor() { }

  ngOnInit(): void {
  }

}
