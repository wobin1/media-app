import { Component } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  constructor(private router: RoutingService){}

  route(page:string){
    this.router.route(page)
  }

}
