import { Component } from '@angular/core';
import { RoutingService } from '../../services/routing-service/routing.service';
import { StorageService } from '../../services/local-storage-service/storage.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

  constructor(private router: RoutingService, private storage: StorageService){}


  route(page:string){
    this.router.route(page)
  }

  logout(page:string){
    console.log("loging out")
    this.storage.removeItem("finremit")

    this.route(page)

  }

}
