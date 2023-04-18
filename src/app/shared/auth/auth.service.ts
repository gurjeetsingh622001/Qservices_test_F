import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  createdata(response: any) {
    // console.log(data)
    localStorage.setItem("token", response.token)
    localStorage.setItem("email", response.data.email)
  }
  getservice() {

    return localStorage.getItem("email")
  }
  gettoken() {
    return localStorage.getItem("token")
  }
  destroyservice() {
    localStorage.removeItem("token")
    localStorage.removeItem("email")
  }

  constructor() { }
}
