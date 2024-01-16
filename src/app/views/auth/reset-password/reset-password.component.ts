import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/shared/services/local-storage-service/storage.service';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
     
  loader:boolean =false;
  userData:any;
  constructor(private router: RoutingService, 
            private api: ServerRequestService,
            private storage: StorageService,
            private toastr: ToastrService){}

  formData={
    "email": "",
    "newPassword": "",
  }



  reset_password(){
    this.loader = true;
    console.log(this.formData)
    this.api.auth('login/school', this.formData).subscribe(
      res=>{
        if(res.status=='success'){
          this.userData = res;
          console.log(this.userData)
          this.storage.saveItemObject("finremit", res)
          this.toastr.success("Successfull", 'Success')
          this.route('main/verify-otp')
          this.loader = false;
        }else{
          this.toastr.error('Failed please try again', 'error')
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
