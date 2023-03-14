import { Component } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 4';
  url: any = '';
  photos: any;

  constructor(private photoService: PhotosService) {}

  ngOnInit() {
    this.getPhotos();
  }

  onSelectFile(event) {
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      this.readFile(event.target.files[0]);
    }
  }

  onDropChange(ev) {
    console.log(ev[0]);
    // this.readFile(ev[0]);
  }

  readFile(ev) {
    var reader = new FileReader();
    reader.readAsDataURL(ev);
    reader.onload = (event) => {
      this.url = event.target.result;
    };
  }

  onDrag(ev, item) {
    console.log('ended', item);
    this.url = '';
    console.log(this.getDataBlob(item.download_url));
  }

  async parseURI(d) {
    var reader = new FileReader();
    reader.readAsDataURL(d);
    return new Promise((res, rej) => {
      reader.onload = (e) => {
        res(e.target.result);
        this.url = e.target.result;
      };
    });
    //await this.readFile(d);
  }

  async getDataBlob(url: any) {
    var res = await fetch(url);
    var blob = await res.blob();
    var uri = await this.parseURI(blob);
    return uri;
  }

  //api
  getPhotos() {
    this.photoService.getPhotos().subscribe((res) => {
      this.photos = res;
    });
  }
}
