import { Component } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';
import { ToastrService } from 'ngx-toastr';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';
import { StorageService } from 'src/app/shared/services/local-storage-service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loader:boolean=false;
  userData:any;
  constructor(private router: RoutingService, 
                private toastr: ToastrService, 
                private api: ServerRequestService,
                private storage: StorageService){}

  route(page:string){
    this.router.route(page)
  }

  loginData={
    "email": "",
    "password": ""
  }



  login(){
    this.loader = true;
    console.log(this.loginData)
    this.api.auth('auth', this.loginData).subscribe(
      res=>{
        if(res.status=='success'){
          this.userData = res;
          console.log(this.userData)
          this.storage.saveItemObject("finremit", res)
          this.toastr.success("Login successfll", 'Success')
          this.route('main/file-upload')
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

}

