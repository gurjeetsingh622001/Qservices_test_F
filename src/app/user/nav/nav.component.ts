import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authservice.destroytoken()
    this.authservice.destroyId()
    this.router.navigateByUrl('/login')
  }
}
