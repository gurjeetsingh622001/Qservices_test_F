import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log('header calls')
    this.isuserloggedInFn()
  }

  isuserloggedInFn() {
    if (this.authservice.gettoken() != null) {
      this.isUserLoggedIn = true
      console.log(this.isUserLoggedIn)
    }
    else {
      this.isUserLoggedIn = false
      console.log(this.isUserLoggedIn)
    }
  }

  logout() {
    this.authservice.destroytoken()
    this.router.navigateByUrl('/login')
  }

}
