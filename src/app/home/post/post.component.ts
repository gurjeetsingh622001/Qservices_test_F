import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { OlxTestServicesService } from 'src/app/shared/olx/olx-test-services.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  imageurl: any
  isUserLoggedin: boolean = false;

  constructor(private apiservice: OlxTestServicesService, private sanitizer: DomSanitizer, private activatedroute: ActivatedRoute, @Inject('imageurl') _imageurl: any, private authservice: AuthService, private spinner: NgxSpinnerService, private toastr: ToastrService) {
    this.imageurl = _imageurl;

    if (this.authservice.gettoken() != null) {
      this.isUserLoggedin = true
      console.log(this.isUserLoggedin)
    }

  }

  Post_data: any
  id: any

  getimageurl(imagename: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.imageurl + "olx_posts/" + imagename)
  }

  getPostbyId() {
    this.spinner.show()
    this.apiservice.getPostByPostId({ 'postId': this.id }).subscribe({
      next: (res: any) => {
        if (res.success == true) {
          this.Post_data = res.data
          setTimeout(() => {
            this.spinner.hide();
          }, 3000);
        }
        else {
          this.toastr.error(res.message)
          setTimeout(() => {
            this.spinner.hide();
          }, 3000);
        }
      },
      error: (err: any) => {
        console.log(err)
        this.toastr.error(err)
        setTimeout(() => {
          this.spinner.hide();
        }, 3000);
      }
    });
  }


  ngOnInit(): void {
    // this.spinner.show()
    this.id = this.activatedroute.snapshot.paramMap.get('id')
    this.getPostbyId()
  }


}
