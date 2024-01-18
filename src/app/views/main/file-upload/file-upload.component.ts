import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  video:any={"name":null};
  thumbnail:any={"name":null};
  response:any;
  loader:boolean=false;
  constructor(public router: Router, 
              private singleRoute: ActivatedRoute, 
              private api: ServerRequestService,
              private toastr: ToastrService){}

  
  videoData:any = {
    "file":"",
    "title": "",
    "type": "",
    "description": "",
    "thumbnail": ""

  }

  ngOnInit(){
  }

  
  empty_content_data(){
    this.videoData.file = "";
    this.videoData.title = "";
    this.videoData.type = "";
    this.videoData.description = "";
    this.videoData.thumbnail = "";
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
        alert(res.message)
        this.video = undefined;
        this.loader = false;
        this.empty_content_data()
        
        
      
      },
      err=>{
        if(err.error.detail == undefined){
          alert("specified media type not found: " + this.videoData.type)
          this.loader=false
        }else {
          alert(err.error.detail)
          this.toastr.error(err.error.detail, 'error')
          alert(err.error.detail)
          this.loader=false;
        }
        
      }

      
    )
    this.loader = false;
  }

}
