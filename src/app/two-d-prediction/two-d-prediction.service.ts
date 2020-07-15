import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwoDPredictionService {

  constructor(private http: HttpClient) { }

  getCarData():Observable<Object[]> {
    return this.http.get<Object[]>('https://storage.googleapis.com/tfjs-tutorials/carsData.json')
  }
}
