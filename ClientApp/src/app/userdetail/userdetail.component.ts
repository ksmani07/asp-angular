import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginserviceService } from '../commonservice/loginservice.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  loginval: any;
  username: any;
  pwd: any;
  userdetailForm: FormGroup;
  constructor(
    private router: Router,
    private loginserv: LoginserviceService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userdetailForm = this.fb.group({
      username: [],
      pwd:[],

    });
    this.loginserv.getlogindata().subscribe(loginvalue => {
     // this.loginval = loginvalue;
      console.log('credentials', loginvalue);
      this.loadform(loginvalue);

    });
  }
  loadform(param) {
    this.userdetailForm.patchValue({
      username: param['username'],
      pwd: param['password']
    })
  }

}
