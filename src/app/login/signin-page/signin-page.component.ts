import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {

  form: FormGroup
  submitted = false

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(150)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ])
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    const user: User = {
      username: this.form.value.username.trim(),
      password: this.form.value.password.trim(),
      is_active: true
    }

    this.auth.signin(user).subscribe(() => {
      this.form.reset()
      this.router.navigate(['/', 'home'])
      this.submitted = false
    }, () => {
      this.submitted = false
    })
  }

}
