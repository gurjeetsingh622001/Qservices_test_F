import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private apiservice: OlxTestServicesService, private sanitizer: DomSanitizer, private activatedroute: ActivatedRoute, @Inject('imageurl') _imageurl: any, private authservice: AuthService) {
    this.imageurl = _imageurl;

    if (this.authservice.gettoken() != null) {
      this.isUserLoggedin = true
      console.log(this.isUserLoggedin)
    }

    this.apiservice.getPostByPostId({ 'postId': this.activatedroute.snapshot.paramMap.get('id') }).subscribe({
      next: (res: any) => {
        if (res.success == true) {
          this.Post_data = res.data
        }
        else {
          console.log(res)
        }
      },
      error: (err: any) => {
        console.log(err)
      }
    });


  }

  Post_data: any

  getimageurl(imagename: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.imageurl + "olx_posts/" + imagename)
  }


  ngOnInit(): void {
    // console.log(this.activatedroute.snapshot.paramMap.get('id'))

  }


}
