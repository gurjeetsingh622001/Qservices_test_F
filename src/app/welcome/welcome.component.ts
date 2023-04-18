import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router) { }
   
  
  ngOnInit(): void {
    // console.log(this.authservice.gettoken())
  } 
  
  
  // logout() {

  //   // console.log(this.authservice.destroyservice)
  
  //   this.authservice.destroyservice();
  //   this.router.navigateByUrl('/login')
  
  
  // }
}
