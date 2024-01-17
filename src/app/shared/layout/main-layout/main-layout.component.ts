import { Component } from '@angular/core';
import { RoutingService } from '../../services/routing-service/routing.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

  constructor(private router: RoutingService){}


  route(page:string){
    this.router.route(page)
  }

}
