import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/shared/services/local-storage-service/storage.service';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent {

    
  loader:boolean =false;
  userData:any;
  constructor(private router: RoutingService, 
            private api: ServerRequestService,
            private storage: StorageService,
            private toastr: ToastrService){}

  formData={
    "email": "",
    "otp": "",
  }



  verify_otp(){
    this.loader = true;
    console.log(this.formData)
    this.api.auth('login/school', this.formData).subscribe(
      res=>{
        if(res.status=='success'){
          this.userData = res;
          console.log(this.userData)
          this.storage.saveItemObject("finremit", res)
          this.toastr.success("Verified", 'Success')
          this.route('main/verify-otp')
          this.loader = false;
        }else{
          this.toastr.error('Verification fail ensure your email is correct', 'error')
          this.loader = false;
        }

      },
      err=>{
        this.toastr.error('Invalid email', 'error')
        this.loader = false;
      }
    )
  }

  route(page:string){
    this.router.route(page)
  }


}
