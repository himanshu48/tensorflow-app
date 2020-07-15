import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigitRecognitionService {

  constructor(private http: HttpClient) { }

  getMnistLabels(){
    return this.http.get('https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8');
  }

  // getMnistImages(){
  //   return this.http.get('https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png');
  // }
}
