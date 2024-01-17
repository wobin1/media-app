import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  video:any;
  thumbnail:any;
  response:any;
  loader:boolean=false;
  constructor(public router: Router, 
              private singleRoute: ActivatedRoute, 
              private api: ServerRequestService){}

  
  videoData:any = {
    "file":"",
    "title": "",
    "type": "",
    "description": "",
    "thumbnail": ""

  }


  getVideo(event:any){
    this.video = event.target.files[0]
    console.log(this.video)
  }

  getThumbnail(event:any){
    this.thumbnail = event.target.files[0]
    console.log(this.thumbnail)
  }

  uploadVideo(){
    console.log("uploading")
    this.loader = true;
    let formData = new FormData();
    formData.set('file', this.video)
    formData.set('thumbnail', this.thumbnail)
    formData.set('title', this.videoData.title)
    formData.set('type', this.videoData.type)
    formData.set('description', this.videoData.description)

    console.log(formData)

    this.api.post('storage/uploads', formData).subscribe(
      
      res=>{
        this.response = res,
        console.log(this.response)
        this.video = undefined;
        this.loader = false;
      },
      err=>{
        console.log(err)
        this.loader=false;
      }
    )

  }

}
