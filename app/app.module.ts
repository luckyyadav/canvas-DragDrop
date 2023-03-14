import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import
 { FileDragNDropDirective } from './dragFIle.directive';
 import { PhotosService } from './photos.service';
import { HttpClientModule } from '@angular/common/http';

import {CanvasComponent} from './canvasApproach/canvas.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, FileDragNDropDirective, CanvasComponent],
  bootstrap:    [ AppComponent ],
  providers: [PhotosService]
})
export class AppModule { }
