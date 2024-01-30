import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent {

  response:any;
  constructor(private api: ServerRequestService, public router: RoutingService){}

  ngOnInit(){
    this.get_uploads()
  }


  get_uploads(){
    console.log("getting uploads")
    this.api.get("storage/uploads?type=videos").subscribe(
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

  delete(id:any){
    console.log(id)
    this.api.delete('materials/' + id).subscribe(
      res => {
        this.response = res,
        console.log(res)
        this.get_uploads()
      },
      err =>{
        console.log(err)
        this.get_uploads()
      }
    )
  }


}
