import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UsersComponent } from './users/users.component';
import { ContentsComponent } from './contents/contents.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { UploadsComponent } from './uploads/uploads.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { ContentUploadComponent } from './content-upload/content-upload.component';
import { AuthGuardService } from 'src/app/shared/services/auth-guard-service/auth-guard.service';

const routes: Routes = [
  {'path': 'contents', component: ContentsComponent, canActivate: [AuthGuardService]},
  {'path': 'users', component: UsersComponent, canActivate: [AuthGuardService]},
  {'path': 'profile', component: ProfilesComponent, canActivate: [AuthGuardService]},
  {'path': 'video-uploads', component: FileUploadComponent, canActivate: [AuthGuardService]},
  {'path': 'content-uploads', component: ContentUploadComponent, canActivate: [AuthGuardService]},
  {'path': 'uploads', component: UploadsComponent, canActivate: [AuthGuardService]},
  {'path': 'video-detail/:id', component: VideoDetailComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
