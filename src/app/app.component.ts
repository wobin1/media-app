import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'media-app';

  constructor(private toastr: ToastrService) {}

  ngOnInit(){
    
    this.showSuccess()
  }


  showSuccess() {
    console.log("hello world")
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
