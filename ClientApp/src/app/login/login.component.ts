import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private route: Router, private formBuilder: FormBuilder,
    private common: CommonService

  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onLogin() {
    console.log(this.loginForm)
    this.common.setLoginData(this.loginForm.value);
   // this.onRegister();
  }
  onRegister() {
    console.log("register fn")
    this.route.navigate(['register'])
  }

}
