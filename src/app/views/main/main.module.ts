import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UploadsComponent } from './uploads/uploads.component';
import { ContentsComponent } from './contents/contents.component';
import { UsersComponent } from './users/users.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FileUploadComponent,
    UploadsComponent,
    ContentsComponent,
    UsersComponent,
    ProfilesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    
  ]
})
export class MainModule { }
