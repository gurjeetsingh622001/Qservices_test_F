import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  edituser = new FormGroup({
    'name': new FormControl(''),
    'email': new FormControl(''),
    'password': new FormControl('')

  })

  id: any
  constructor(private activatedroute: ActivatedRoute, private userservice: UserService, private router: Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get('id')
    this.getdata()
  }
  // getdata
  getdata() {
    this.userservice.getsingleuser(this.id).subscribe({
      next: (result: any) => {
        // console.log(result)
        this.edituser.patchValue({ 'name': result.response.data.name })
        this.edituser.patchValue({ 'email': result.response.data.email })

      },
      error: (err: any) => {
        console.log(err)

      }

    })


  }
  update() {
    this.userservice.updateuser(this.id, this.edituser.value).subscribe({
      next: (result: any) => {
        if (result.response.status == true) {
          this.toastr.success('sucess',result.response.msg)
          this.router.navigateByUrl("viewuser")
        }
        else {
          this.toastr.error('error',result.response.msg)
        }
        error: (err: any) => {
           
        }
      }
    })
  }

}
