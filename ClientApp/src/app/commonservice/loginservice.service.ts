import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  logindata = new BehaviorSubject({});
  constructor() { }

  setlogindata(param1) {
    this.logindata.next(param1);
  }

  getlogindata(): Observable<any>
  {
    return this.logindata.asObservable();
  }

}
