import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/shared/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  addbrandForm = new FormGroup({
    brand_name: new FormControl(),
    brand_logo: new FormControl()
  })

  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService, private brand: BrandService) { }

  ngOnInit(): void {
  }
  photo(event:any){
    this.addbrandForm.patchValue({'brand_logo':event.target.files[0]})
  }
  submit() {

    this.spinner.show()
    const data = new FormData()
    data.append('brand_name', this.addbrandForm.value.brand_name)
    data.append('brand_logo', this.addbrandForm.value.brand_logo)
    this.brand.add(data).subscribe({
      next: (result: any) => {
        this.spinner.hide()
        if (result.response.status) {
          this.toastr.success('sucess', result.response.msg)
        }
        else{
          this.toastr.error('error',result.response.msg)
        }


      },
      error: (err: any) => {
        this.spinner.hide()
        this.toastr.error('server error',err  )

      }

    })



  }

}
