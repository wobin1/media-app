import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UploadsComponent } from './uploads/uploads.component';
import { ContentsComponent } from './contents/contents.component';
import { UsersComponent } from './users/users.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FormsModule } from '@angular/forms';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { ContentUploadComponent } from './content-upload/content-upload.component';


@NgModule({
  declarations: [
    FileUploadComponent,
    UploadsComponent,
    ContentsComponent,
    UsersComponent,
    ProfilesComponent,
    VideoDetailComponent,
    ContentUploadComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgxFileDropModule,
    FormsModule,
    SharedModule
  ]
})
export class MainModule { }
