import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserChecker } from '../app/Model/userchecker';
import { Usercreat } from '../app/Model/usercreat';
import {ApiResponse} from '../app/Model/ApiResponse';
@Injectable({
  providedIn: 'root'
})
export class UserprofService {

  constructor( private http: HttpClient){
  }
  getPhoneOTP(ph){
    console.log('phone number '+ ph);
    let params = new HttpParams();
    params = params.append('phone',ph);

     return this.http.get('http://yestest.de:8088/login/',{params: params});
//console.log("test");
  }

  getOTPsubmit(p,otp)
  {

    let params = new HttpParams();
    params = params.append('phone', p);
    params = params.append('code', otp);

    return this.http.get<ApiResponse>('http://yestest.de:8088/checkcode',{ params: params });
  }
  getUsers()
  {
    return this.http.get<UserChecker[]>('http://yestest.de:8088/gl/Users');
  }

  createUserprof(userForm)
  {
    console.log("creating the user profile"+userForm);
    return this.http.post<Usercreat[]>('http://yestest.de:8088/users', userForm);
  }
}
