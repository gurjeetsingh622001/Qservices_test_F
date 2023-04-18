import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user/user.service';
import { OlxTestServicesService } from '../shared/olx/olx-test-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // buttonValidation: Boolean = false
  adduserForm: FormGroup;

  constructor(private toastr: ToastrService, private router: Router, private apiservice: OlxTestServicesService) {

    this.adduserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z]+([ \-'][a-zA-Z]+)*$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^(?:\+91|0)?[6789]\d{9}$/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).+$/), Validators.minLength(6), Validators.maxLength(50)]),
      confirm_pass: new FormControl('', [Validators.required, this.confirmPass()])
    })

  }


  ngOnInit(): void {
    // console.log(this.adduserForm.status === 'INVALID')
  }
  // / Asad123@@ 

  register() {
    // this.buttonValidation = true
    if (this.adduserForm.status === 'INVALID') {
      return this.adduserForm.markAllAsTouched();
    }
    else {
      this.apiservice.userRegister(this.adduserForm.value).subscribe({
        next: (res: any) => {
          if (res.success == true) {
            this.toastr.success('sucess', res.message)
            this.router.navigateByUrl('login')

          }
          else {
            // console.log(res)
            this.toastr.error('error', res.message)
          }

        },
        error: (err) => {
          this.toastr.error('error', 'some thing went Wrong')
        }
      })
    }

  }

  get get() {
    return this.adduserForm.controls
  }

  confirmPass(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let password = this.adduserForm?.controls['password']?.value
      let confirm_pass = this.adduserForm?.controls['confirm_pass']?.value
      if (password === confirm_pass) {
        return null
      }
      else {
        return { 'confirmPassword': true }
      }
    }
  }

}
