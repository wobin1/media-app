import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-content-upload',
  templateUrl: './content-upload.component.html',
  styleUrls: ['./content-upload.component.css']
})
export class ContentUploadComponent {

  response:any;
  loader:boolean=false;
  constructor(public router: Router, 
              private singleRoute: ActivatedRoute, 
              private api: ServerRequestService,
              private toastr: ToastrService){}

  
  contentData:any = {
    "tile":"",
    "description": "",
    "content": "",

  }

  empty_content_data(){
    this.contentData.title = "";
    this.contentData.description = "";
    this.contentData.content = "";
  }

  ngOnInit(){
  }

  uploadContent(){
    console.log(this.contentData)
    this.loader = true;


    this.api.post('storage/contents', this.contentData).subscribe(
      
      res=>{
        this.response = res,
        console.log(this.response)
        this.toastr.success(res.message, 'Success')
        alert("Content uploaded successfully")
        this.loader=false;
        this.empty_content_data()
      
      },
      err=>{
        if(err.error.detail == undefined){
          alert("specified media type not found: ")
          this.loader=false
        }else {
          alert("there was error uploading content")
          this.toastr.error(err.error.detail, 'error')
          alert(err.error.detail)
          this.loader=false;
        }
        
      }
    )

  }

}
