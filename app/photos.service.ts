import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get('https://picsum.photos/v2/list?page=2&limit=4');
  }
}
