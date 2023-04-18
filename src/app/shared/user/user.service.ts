import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base: any
  token: any
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any, private authservice: AuthService) {
    this.base = _baseurl
    this.token =
      this.authservice.gettoken()
  }
  // registerApi
  register(form: any) {
    return this.http.post(this.base + "registeruser", form)

  }
  // loginApi
  login(form: any) {
    return this.http.post(this.base + "login", form)
  }

  // selectApi
  getuser() {
    var header_object = new HttpHeaders().set('Authorization', "Bearer " + this.token);
    return this.http.get(this.base + "getStudent", { headers: header_object })
  }

  // getSingleUserApi
  getsingleuser(id: any) {
    var header_object = new HttpHeaders().set(
      'Authorization', "Bearer " + this.token
    );

    return this.http.get(this.base + "getStudentById/" + id, { headers: header_object })
  }
  updateuser(id: any, form: any) {
    var header_object = new HttpHeaders().set('Authorization', "Bearer " + this.token);

    return this.http.post(this.base + "updateStudent/" + id, form, { headers: header_object })
  }




}
