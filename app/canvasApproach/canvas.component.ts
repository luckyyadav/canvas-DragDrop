import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('myCanvas')
  canvasRef: ElementRef;
  private ctx: CanvasRenderingContext2D;
  reader: FileReader = new FileReader();
  imgPath: any = new Image();
  photos;
  constructor(private photoService: PhotosService) {}

  ngOnInit() {
    this.getPhotos();
  }

  ngAfterViewInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
  }

  UploadFile(file) {
    this.reader.readAsDataURL(file.target.files[0]);
    this.readFiles();
  }

  readFiles() {
    this.reader.onload = () => {
      console.log(this.reader.result);
      this.imgPath['src'] = this.reader.result;

      console.log(this.imgPath);
      this.ctx.drawImage(this.imgPath, 0, 0);
    };
  }

  //api
  getPhotos() {
    this.photoService.getPhotos().subscribe((res) => {
      this.photos = res;
    });
  }
}
