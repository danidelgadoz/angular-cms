import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message : string;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.form = formBuilder.group({
      email: ['frontend@internovam.com', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      password: ['123456', Validators.required]
    });
  }

  ngOnInit() {
  }

  loginUser(value : any ) {
    console.log(this.form.value);

    this.authenticationService.login(this.form.value.email, this.form.value.password)
      .subscribe(
        data => {
          if (data.auth)
            this.router.navigate(['/dashboard']);
          else
            this.message = data.message;
        },
        error => {
          console.error(error);
        }
      );
  }

}
