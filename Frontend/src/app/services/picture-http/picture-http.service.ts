import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PictureToUploadModel } from '../../../picture-structures/picture-to-upload-model';
import { AppConstants } from '../../constants';
import { NotificationModalManagementService } from '../notification-modal-management/notification-modal-management.service';

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
}
