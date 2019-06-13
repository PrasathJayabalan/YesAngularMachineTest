import { Component, OnInit } from '@angular/core';
import { UserprofService } from '../userprof.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  phone : number ;
  ONumber :  number;
  otpvisible: boolean = false;
  success: boolean ;

  constructor(private userservice : UserprofService,private router: Router) { }

  ngOnInit() {
  }
  phoneSubmit(data)
  {
    console.log(data)

    this.userservice.getPhoneOTP(data)
    .subscribe(response=>{
      console.log(response);
    });
    this.otpvisible = true;
   }
otpSubmit()
{
  let response=this.userservice.getOTPsubmit(this.phone, this.ONumber)
  .subscribe(response => {
    console.log(response);
    let res = response.data.isVerified.success;
    console.log(res);
     if(res){
       this.router.navigateByUrl('user-details');
    }
    else{
      alert("Please check the inputs");
    }

  });




  //
}


}
