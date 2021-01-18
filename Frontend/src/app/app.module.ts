import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PicturesListComponent } from './pictures-list/pictures-list.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PicturesListComponent,
    UploadPictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
