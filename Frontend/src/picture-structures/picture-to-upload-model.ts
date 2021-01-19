export class PictureToUploadModel{

  constructor(
    public title: string,
    public description: string,
    public file: string | ArrayBuffer | null
  ) {
  }
}
