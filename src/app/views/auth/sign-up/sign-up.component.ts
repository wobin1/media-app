import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private toastr: ToastrService,
            private router: RoutingService,
            private api: ServerRequestService) {}

    loader!:boolean;
    formSubmit:boolean=false;
    stage:string='one';
    userdata:any;

    userData=  {
          "fullName":"",
          "email": "",
          "phone_number": "",
          "username": "",
          "password": "",
          "role": "User",
          "userType": "Personal"
      }

    ngOnInit(){

    }


    register(){
        this.loader=true;
        console.log(this.userData)

        this.api.auth('users/onboarding', this.userData).subscribe(
        res=>{
        this.userData=res;
        console.log(this.userData)
        this.toastr.success('School registered successfully', 'Success')
        this.route('auth/login')
        this.loader=false;
        },
        err=>{
        this.stage = 'one'
        console.log(err.error.message)
        this.toastr.error( err.error.message, 'error')
        this.loader=false;
        }
      )


    }

    route(page:string){
    this.router.route(page)
    }

    showSuccess(alertType:string, message:string) {
    this.toastr.success(alertType, message);
    }


}
