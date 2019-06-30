import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loginData = new BehaviorSubject({});

  constructor() { }

  setLoginData(loginform) {
    this.loginData.next(loginform);
  }
  getLoginData(): Observable <any> {
    return this.loginData.asObservable();
  }

}
