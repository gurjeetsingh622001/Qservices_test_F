import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { OlxTestServicesService } from 'src/app/shared/olx/olx-test-services.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {

  noPostsAreThere: boolean = false

  imageurl: any
  constructor(private authservice: AuthService, private apiservice: OlxTestServicesService, private spinner: NgxSpinnerService, private sanitizer: DomSanitizer, @Inject('imageurl') _imageurl: any, private toastr: ToastrService) {
    this.imageurl = _imageurl
    this.userid = this.authservice.getuserId()

  }

  getimageurl(imagename: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.imageurl + "olx_posts/" + imagename)
  }

  userid: any

  Post_data = []

  ngOnInit(): void {
    this.spinner.show()
    this.viewpostbyId()
    setTimeout(() => {
      this.spinner.hide()
    }, 3000)
  }

  viewpostbyId() {
    console.log('viewpostbyId called')
    this.apiservice.viewpost({ userId: this.userid }).subscribe({
      next: (res: any) => {
        if (res.success == true) {
          this.Post_data = res.data
          console.log(res)
        }
        else {
          console.log(res)
          this.Post_data = []

          this.noPostsAreThere = true
          // console.log(this.noPostsAreThere)
        }
      }
      , error: (err: any) => {
        console.log(err)

      }
    })
  }

  deletepost(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiservice.deletepost({ PostId: id }).subscribe({
          next: (res: any) => {

            if (res.success == true) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              console.log('ddddd')
              this.viewpostbyId()
              this.toastr.success(res.message)

            }
            else {
              this.toastr.error(res.message)
            }
          },
          error: (err: any) => {
            this.toastr.error(err)

          }
        })

      }
    })
  }

}
