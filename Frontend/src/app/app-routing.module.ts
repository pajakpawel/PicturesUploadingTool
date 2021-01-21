import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PicturesListComponent} from './pictures-list/pictures-list.component';
import {UploadPictureComponent} from './upload-picture/upload-picture.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'pictures-list', component: PicturesListComponent},
  {path: 'upload-picture', component: UploadPictureComponent},
  {path: '', redirectTo: '/upload-picture', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
