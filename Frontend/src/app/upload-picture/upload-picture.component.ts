import { Component, OnInit } from '@angular/core';

import { PictureToUploadModel } from '../../picture-structures/picture-to-upload-model';

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.css']
})
export class UploadPictureComponent implements OnInit {
  pictureToUpload = new PictureToUploadModel('Picture title', 'Picture description', '');
  pictureFileValid = false;
  fileFromUser = new File([], 'file');

  constructor() {
  }

  ngOnInit(): void {

  }

  onFileChange(event: any): void {
    this.fileFromUser = event.target.files[0];
    this.isPictureFileValid(this.fileFromUser.name);
    if (this.pictureFileValid) {
      this.getPictureFileUrl(event);
    } else {
      this.pictureToUpload.file = '';
    }
  }

  getPictureFileUrl(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent) => {
        this.pictureToUpload.file = (e.target as FileReader).result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  isPictureFileValid(fileName: string): void {
    const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
    this.pictureFileValid = fileExtension === 'jpg' || fileExtension === 'png';
  }

  onSubmit(): void {
    console.log('Upload picture onSubmit');
    this.restoreDefaultValues();
  }

  restoreDefaultValues(): void {
    this.pictureToUpload = new PictureToUploadModel('Picture title', 'Picture description', '');
    this.pictureFileValid = false;
    this.fileFromUser = new File([], 'file');
  }
}
