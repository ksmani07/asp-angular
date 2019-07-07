import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginData: any;
  username: any;
  registerForm: FormGroup;
  constructor(
    private router: Router,
    private common: CommonService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      user: []

    });
    this.common.getLoginData().subscribe(loginValue => {
      this.loginData = loginValue;
      console.log('inside loginData', this.loginData);
      this.username = this.loginData['username'];
      this.loadForm(this.username);
      
    });
    console.log('loginData', this.loginData);
  }
  loadForm(username) {

    this.registerForm.patchValue({
      user: username
    })

  }

  onBack() {
    console.log("works");
    this.router.navigateByUrl('')
  }
  onSubmit() {
    console.log('resgister form', this.registerForm.value);
  }
}
