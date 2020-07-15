import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TwoDPredictionComponent } from './two-d-prediction/two-d-prediction.component';
import { DigitRecognitionComponent } from './digit-recognition/digit-recognition.component';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoDPredictionComponent,
    DigitRecognitionComponent,
    SpeechRecognitionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
