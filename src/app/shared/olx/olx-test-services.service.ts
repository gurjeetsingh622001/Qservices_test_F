import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OlxTestServicesService {
  userurl: string

  constructor(@Inject('userurl') _userurl: any, private http: HttpClient) {
    this.userurl = _userurl
  }

  userRegister(form: any) {
    return this.http.post(this.userurl + 'adduser', form)
  }

  userLogin(form: any) {
    return this.http.post(this.userurl + 'userlogin', form)
  }

  addpost(form: any) {
    return this.http.post(this.userurl + 'addpost', form)
  }

  viewpost(id: any) {
    return this.http.post(this.userurl + 'viewpost', id)
  }

  viewallpost() {
    return this.http.get(this.userurl + 'viewallpost')
  }

  getPostByPostId(id: any) {
    return this.http.post(this.userurl + 'getPostByPostId', id)
  }

  editPostbyId(form: any) {
    return this.http.post(this.userurl + 'editPostbyId', form)
  }

}
