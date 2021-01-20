export class AppConstants {
  public static get appTitle(): string { return 'Picture uploading tool'; }
  public static get apiURL(): string { return 'http://127.0.0.1:5000'; }
  public static get apiUploadPictureURL(): string { return this.apiURL + '/pictures/upload'; }
}
