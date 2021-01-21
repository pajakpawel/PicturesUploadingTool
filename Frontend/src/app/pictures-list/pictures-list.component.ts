import { Component, OnInit } from '@angular/core';
import { PictureFromServerModel } from '../../picture-structures/picture-from-server-model';
import { PictureHttpService } from '../services/picture-http/picture-http.service';

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

}
