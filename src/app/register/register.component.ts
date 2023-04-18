import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  buttonValidation: Boolean = false
  adduserForm: FormGroup;

  constructor(private userservice: UserService, private toastr: ToastrService, private router: Router) {

    this.adduserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]),
      confirm_pass: new FormControl('', [Validators.required, this.confirmPass()])
    })

  }


  ngOnInit(): void {
    // console.log(this.adduserForm.status === 'INVALID')
  }
  // / Asad123@@ 

  register() {
    this.buttonValidation = true
    if (this.adduserForm.status === 'INVALID') {
      return this.adduserForm.markAllAsTouched();
    }
    else {
      this.userservice.register(this.adduserForm.value).subscribe({
        next: (result: any) => {
          // console.log(result)
          if (result.response.status == true) {
            this.toastr.success('sucess', result.response.msg)
            this.router.navigateByUrl('login')

          }
          else {
            this.toastr.error('error', result.response.msg)
          }

        },
        error: (err) => {
          this.toastr.error('error', 'fill data')
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
