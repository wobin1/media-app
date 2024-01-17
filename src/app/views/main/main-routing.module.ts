import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UsersComponent } from './users/users.component';
import { ContentsComponent } from './contents/contents.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { UploadsComponent } from './uploads/uploads.component';

const routes: Routes = [
  {'path': 'contents', component: ContentsComponent},
  {'path': 'users', component: UsersComponent},
  {'path': 'profile', component: ProfilesComponent},
  {'path': 'video-uploads', component: FileUploadComponent},
  {'path': 'uploads', component: UploadsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
