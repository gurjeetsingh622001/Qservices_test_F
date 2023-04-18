import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { OlxTestServicesService } from 'src/app/shared/olx/olx-test-services.service';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.css']
})
export class MyAdsComponent implements OnInit {


  imageurl: any
  constructor(private authservice: AuthService, private apiservice: OlxTestServicesService, private spinner: NgxSpinnerService, private sanitizer: DomSanitizer, @Inject('imageurl') _imageurl: any) {
    this.imageurl = _imageurl
  }

  getimageurl(imagename: any) {
    // console.log(this.imageurl+"mechanic_profile/"+imagename)

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.imageurl + "olx_posts/" + imagename)
  }

  userid: any

  Post_data = []

  ngOnInit(): void {
    this.spinner.show()
    this.userid = this.authservice.getuserId()
    // console.log(this.userid)
    this.apiservice.viewpost({ userId: this.userid }).subscribe({
      next: (res: any) => {
        if (res.success == true) {
          console.log(res)
          this.Post_data = res.data
          this.spinner.hide()

        }
        else {
          console.log(res)
          this.spinner.hide()
        }
      }
      , error: (err: any) => {
        console.log(err)
        this.spinner.hide()
      }
    })
  }

}
