import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../shared/user/user.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  constructor(private userservice:UserService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.getuser()
  }
  userdata=[]

  getuser(){
     this.spinner.show()
     this.userservice.getuser().subscribe({
      next:(result:any)=>{
        this.spinner.hide()
        // console.log(result)
        this.userdata=result.response.data


      },
      error:(error:any)=>{
        
        console.log(error)

      }

     })
  }

}
