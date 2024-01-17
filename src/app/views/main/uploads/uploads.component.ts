import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent {

  response:any;
  constructor(private api: ServerRequestService, public router: Router){}

  ngOnInit(){
    this.get_uploads()
  }


  get_uploads(){
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


}
