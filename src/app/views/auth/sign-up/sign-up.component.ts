import { Component } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    constructor(private router: RoutingService){}

    route(page:string){
      this.router.route(page)
    }
}
