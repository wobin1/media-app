import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/shared/services/local-storage-service/storage.service';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  loader:boolean =false;
  userData:any;
  constructor(private router: RoutingService, 
            private api: ServerRequestService,
            private storage: StorageService,
            private toastr: ToastrService){}

  formData={
    "email": "",
  }



  get_otp(){
    this.loader = true;
    console.log(this.formData)
    this.api.auth('login/school', this.formData).subscribe(
      res=>{
        if(res.status=='success'){
          this.userData = res;
          console.log(this.userData)
          this.storage.saveItemObject("finremit", res)
          this.toastr.success("an OTP has been sent to the email if its valid", 'Success')
          this.route('main/verify-otp')
          this.loader = false;
        }else{
          this.toastr.error('there was a problem! Try again', 'error')
          this.loader = false;
        }

      },
      err=>{
        this.toastr.error('Invalid Username or Password', 'error')
        this.loader = false;
      }
    )
  }

  route(page:string){
    this.router.route(page)
  }


}
