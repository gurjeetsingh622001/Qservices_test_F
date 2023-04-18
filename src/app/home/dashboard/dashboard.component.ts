import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { OlxTestServicesService } from 'src/app/shared/olx/olx-test-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  All_Posts = [];
  imageurl: any;

  constructor(private apiservice: OlxTestServicesService, private tostr: ToastrService, private spinner: NgxSpinnerService, private sanitizer: DomSanitizer, @Inject('imageurl') _imageurl: any) {
    this.imageurl = _imageurl
  }

  getimageurl(imagename: any) {
    // console.log(this.imageurl+"mechanic_profile/"+imagename)

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.imageurl + "olx_posts/" + imagename)
  }

  ngOnInit(): void {
    this.apiservice.viewallpost().subscribe({
      next: (res: any) => {
        if (res.success == true) {
          // console.log(res)
          this.All_Posts = res.data
        }
        else {
          // console.log(res)
        }
      },
      error: (err: any) => {
        // console.log(err)
      }
    })
  }

}
