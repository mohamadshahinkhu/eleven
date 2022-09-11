import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchpasswordService } from 'src/app/_validators/matchpassword.service';
import { UniqueusernameService } from 'src/app/_validators/uniqueusername.service';
import { AuthService } from ".//../../_services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private matchpassword: MatchpasswordService,
    private uniquedusername: UniqueusernameService,
    private authService : AuthService
    ) {}
  form = new FormGroup!({
    username: new FormControl
      ('',
        [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100)],
        [this.uniquedusername.validate.bind(this.uniquedusername)]),
    password: new FormControl
      ('',
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)]),
    passwordconfirmation: new FormControl
      ('',
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)],
        [this.uniquedusername.validate])
  },
    {
      validators: [this.matchpassword.validate]
    }
  );
  get f() {
    return this.form.controls
  }

  onSubmit() {
   if (this.form.invalid){
    this.form.markAllAsTouched();
    return;
  }
    this.authService.signup(this.form.value).subscribe((Response) => {
      console.log(Response);

    })

  }
  showErrorPasswordDontMatch(){
    return this.form.controls.password.dirty &&
    this.form.controls.password.touched &&
    this.form.controls.passwordconfirmation.dirty &&
    this.form.controls.passwordconfirmation.touched
  }
  ngOnInit(): void {
  }
}
