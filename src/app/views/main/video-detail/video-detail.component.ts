import { Component } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent {

  edit:boolean=false;
  thumbnail:any;
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

}
