import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PictureToUploadModel } from '../../../picture-structures/picture-to-upload-model';
import { AppConstants } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class PictureHttpService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private httpClient: HttpClient
  ) {
  }

  uploadPicture(picture: PictureToUploadModel): void {
    this.httpClient.post(AppConstants.apiUploadPictureURL, picture, this.httpOptions)
      .subscribe({
        next: value => {
          console.log('Picture uploaded');
        },
        error: err => {
          console.log('Picture could not be uploaded');
        }
      });
  }
}
