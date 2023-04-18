import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { OlxTestServicesService } from 'src/app/shared/olx/olx-test-services.service';

@Component({
  selector: 'app-post-ads',
  templateUrl: './post-ads.component.html',
  styleUrls: ['./post-ads.component.css']
})
export class PostAdsComponent implements OnInit {

  adForm: FormGroup;
  selected_image: any

  constructor(private apiservice: OlxTestServicesService, private router: Router, private authsertvice: AuthService, private toastr: ToastrService) {

    this.adForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.minLength(50), Validators.maxLength(500)]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      userId: new FormControl('')
    })

  }

  ngOnInit(): void {
    // console.log(this.adForm)
    this.adForm.patchValue({ 'userId': this.authsertvice.getuserId() })
  }

  change(event: any) {
    const file = event.target.files[0];
    const ext = file.name.split('.').pop().toLowerCase();

    if (ext !== 'jpg') {
      // clear the input and show an error message
      event.target.value = null;
      this.adForm.patchValue({ 'image': '' });
      this.adForm?.get('image')?.setErrors({ 'pattern': true });
      return;
    }

    // if the file is valid, assign it to the image FormControl
    this.selected_image = file;
    this.adForm.patchValue({ 'image': this.selected_image });
  }


  post() {
    // console.log(this.adForm.value)
    if (this.adForm.status === 'INVALID') {
      return this.adForm.markAllAsTouched();
    }
    else {

      const formData = new FormData();
      formData.append('title', this.adForm.value.title);
      formData.append('description', this.adForm.value.description);
      formData.append('price', this.adForm.value.price);
      formData.append('image', this.selected_image);
      formData.append('userId', this.adForm.value.userId);

      this.apiservice.addpost(formData).subscribe({
        next: (res: any) => {
          if (res.success == true) {
            // console.log(res)
            this.toastr.success('Success', res.message)
            this.router.navigateByUrl('/user/myads')
          }
          else {
            this.toastr.success('Success', res.message)
          }
        },
        error: (err: any) => {
          this.toastr.error('Success', err)
        }
      })
    }
  }

  get get() {
    return this.adForm.controls
  }
}
