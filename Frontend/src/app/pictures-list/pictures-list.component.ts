import { Component, OnInit } from '@angular/core';
import { PictureFromServerModel } from '../../picture-structures/picture-from-server-model';
import { PictureHttpService } from '../services/picture-http/picture-http.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.css']
})
export class PicturesListComponent implements OnInit {

  picturesList: PictureFromServerModel[] = [];

  constructor(private pictureHttpService: PictureHttpService) { }

  ngOnInit(): void {
    this.getPicturesList();
  }

  getPicturesList(): void {
    this.pictureHttpService.getAllPictures().subscribe(pictures => this.picturesList = pictures);
  }

  deletePicture(picture: PictureFromServerModel): void {
    this.picturesList = this.picturesList.filter(list => list !== picture);
    this.pictureHttpService.deletePicture(picture);
  }

  downloadPicture(picture: PictureFromServerModel): void {
    saveAs(picture.file, picture.title);
  }
}
