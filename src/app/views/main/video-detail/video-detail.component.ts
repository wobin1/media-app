import { Component } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent {

  edit:boolean=false;
  thumbnail:any;
  response:any;

  constructor(private api: ServerRequestService, private router: RoutingService){}


  videoData:any = {
    "file":"",
    "title": "",
    "type": "",
    "description": "",
    "thumbnail": ""

  }


  getThumbnail(event:any){
    this.thumbnail = event.target.files[0]
    console.log(this.thumbnail)
  }

  edit_video(){
    this.edit = true;
  }

  update_video(){
    this.edit= false
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
