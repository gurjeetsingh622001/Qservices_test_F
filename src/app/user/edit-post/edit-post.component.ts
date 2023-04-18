import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { OlxTestServicesService } from 'src/app/shared/olx/olx-test-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  adForm: FormGroup;

  selected_image: any

  Post_Id: any

  constructor(private apiservice: OlxTestServicesService, private router: Router, private authsertvice: AuthService, private toastr: ToastrService, private acitvatedroute: ActivatedRoute, private spinner: NgxSpinnerService) {

    this.adForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      userId: new FormControl('')
    })

  }

  ngOnInit(): void {
    this.Post_Id = this.acitvatedroute.snapshot.paramMap.get('_id')
    this.spinner.show()
    this.apiservice.getPostByPostId({ postId: this.Post_Id }).subscribe({

      next: (res: any) => {
        if (res.success == true) {
          console.log(res)
          this.adForm.patchValue({ 'title': res.data.title })
          this.adForm.patchValue({ 'description': res.data.description })
          this.adForm.patchValue({ 'price': res.data.price })
          setTimeout(() => {
            this.spinner.hide();
          }, 3000);
          this.toastr.success('Success', res.message)
        }
        else {

          setTimeout(() => {
            this.spinner.hide();
          }, 3000);
          this.toastr.success('Success', res.message)

        }
      }
      , error: (err: any) => {
        this.toastr.error('Success', err)
        setTimeout(() => {
          this.spinner.hide();
        }, 3000);
      }
    })

  }

  change(event: any) {
    this.selected_image = event.target.files[0];
    this.adForm.patchValue({ 'image': this.selected_image });
  }

  edit() {
    // console.log(this.adForm.value)
    if (this.adForm.status === 'INVALID') {
      return this.adForm.markAllAsTouched();
    }
    else {
      this.spinner.show()
      const formData = new FormData();
      formData.append('title', this.adForm.value.title);
      formData.append('description', this.adForm.value.description);
      formData.append('price', this.adForm.value.price);
      formData.append('image', this.selected_image);
      formData.append('PostId', this.Post_Id);

      this.apiservice.editPostbyId(formData).subscribe({

        next: (res: any) => {
          if (res.success == true) {
            console.log(res)
            this.toastr.success('Success', res.message)
            this.router.navigateByUrl('/user/myads')
            this.spinner.hide()
          }
          else {
            this.toastr.success('Success', res.message)
            this.spinner.hide()

          }
        },
        error: (err: any) => {
          this.toastr.error('Success', err)
          this.spinner.hide()

        }
      })
    }
  }

  get get() {
    return this.adForm.controls
  }

   
}
