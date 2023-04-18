import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { UserService } from '../shared/user/user.service';
import { OlxTestServicesService } from '../shared/olx/olx-test-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;



  constructor(private router: Router, private toastr: ToastrService, private authservice: AuthService, private spinner: NgxSpinnerService, private apiservice: OlxTestServicesService) {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])

    })
  }

  ngOnInit(): void {

    if (this.authservice.gettoken() != null) {
      this.router.navigateByUrl('/user/u_dash')
    }
  }

  login() {
    if (this.loginForm.status === 'INVALID') {
      return this.loginForm.markAllAsTouched();
    }
    else {
      this.spinner.show();
      this.apiservice.userLogin(this.loginForm.value).subscribe({
        next: (res: any) => {
          // console.log(res)
          if (res.success == true) {
            this.toastr.success(res.message)
            this.router.navigateByUrl('/user/postads')
            this.authservice.storetoken(res)
            this.authservice.saveuserId(res)
            this.spinner.hide();
          }
          else {
            this.toastr.error('Error', res.message)
            this.spinner.hide();
          }
        },
        error: (err: any) => {
          this.toastr.error('Error', err.message)
          this.spinner.hide();
        }
      })
    }
  }

  get get() {
    return this.loginForm.controls
  }
}
