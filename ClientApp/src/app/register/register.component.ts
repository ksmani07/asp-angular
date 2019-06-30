import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginData: any;
  constructor(
    private router: Router,
    private common: CommonService
  ) { }

  ngOnInit() {
    this.common.getLoginData().subscribe(loginValue => {
      this.loginData = loginValue;
      console.log('inside loginData', this.loginData);
    });
    console.log('loginData', this.loginData);
  }

  onBack() {
    console.log("works");
    this.router.navigateByUrl('')
  }
}
