import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  file:any;
  response:any;
  constructor(public router: Router, 
    private singleRoute: ActivatedRoute){}


  getFile(event:any){
    this.file = event.target.files[0]
    console.log(this.file)

  }

  uploadImage(){

    let formData = new FormData();
    formData.set('file', this.file)

    let imgData = {
      "file": formData,
    }

    console.log(formData)

    // this.api.post('medias', formData).subscribe(
    //   res=>{
    //     this.response = res,
    //     console.log(this.response)
    //     this.file = undefined;
    //   },
    //   err=>{
    //     console.log(err)
    //   }
    // )

  }

}
