import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PictureToUploadModel } from '../../../picture-structures/picture-to-upload-model';
import { AppConstants } from '../../constants';
import { NotificationModalManagementService } from '../notification-modal-management/notification-modal-management.service';
import { PictureFromServerModel } from '../../../picture-structures/picture-from-server-model';

@Injectable({
  providedIn: 'root'
})
export class PictureHttpService {
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private httpClient: HttpClient,
    private notificationModalManagement: NotificationModalManagementService
  ) {
  }

  uploadPicture(picture: PictureToUploadModel): void {
    this.httpClient.post(AppConstants.apiUploadPictureURL, picture, this.httpOptions)
      .subscribe({
        next: value => {
          this.notificationModalManagement.showNotificationModal('Picture uploaded. Thank you!');
        },
        error: err => {
          this.notificationModalManagement.showNotificationModal('Picture could not be uploaded');
        }
      });
  }

  getAllPictures(): Observable<PictureFromServerModel[]> {
    const picturesListObservable = this.httpClient.get<PictureFromServerModel[]>(AppConstants.apiGetAllPicturesURL);
    picturesListObservable.subscribe({
      error: err => {
        this.notificationModalManagement.showNotificationModal('Pictures could not be fetched from server');
      }
    });
    return picturesListObservable;
  }

    deletePicture(picture: PictureFromServerModel): void {
    const pictureId = picture._id.$oid;

    this.httpClient.delete(AppConstants.apiDeletePictureURL + pictureId, this.httpOptions)
      .subscribe({
        next: value => {
          this.notificationModalManagement.showNotificationModal('Picture deleted.');
        },
        error: err => {
          this.notificationModalManagement.showNotificationModal('Picture could not be deleted.');
        }
      });
  }
}
