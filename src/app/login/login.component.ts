import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()

  })



  constructor(private router: Router, private toastr: ToastrService, private authservice: AuthService, private spinner: NgxSpinnerService, private userservice: UserService) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
    // console.log(this.authservice.getservice()) 
    if (this.authservice.getservice() != null) {
      this.router.navigateByUrl('welcome')

    }
  }
  login() {
    this.spinner.show()
    this.userservice.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res)
        if (res.response.status) {
          this.authservice.createdata(res.response
          )
          this.toastr.success('sucess', res.response.msg)
          this.router.navigateByUrl('welcome')
        }
        else {
          this.toastr.error('error', res.response.msg)
        }
      },
      (err: any) => {
        console.log(err)
        this.spinner.hide()
        this.toastr.error('error', 'try again')
      }
    )

  }

}
