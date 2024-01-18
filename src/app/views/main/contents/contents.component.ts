import { Component } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent {

  response:any;
  constructor(private api: ServerRequestService, public router: RoutingService){}

  ngOnInit(){
    this.get_content()
  }


  get_content(){
    this.api.get("storage/contents").subscribe(
      res=>{
        this.response = res,
        console.log(this.response)
      },
      err=>{
        console.log(err)
      }
    )
  }

  route(page:string, id:any){
    this.router.detail(page, id)
  }


}
