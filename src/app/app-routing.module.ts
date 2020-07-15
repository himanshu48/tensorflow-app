import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoDPredictionComponent } from './two-d-prediction/two-d-prediction.component';
import { DigitRecognitionComponent } from './digit-recognition/digit-recognition.component';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '2d', component: TwoDPredictionComponent},
  {path: 'digit', component: DigitRecognitionComponent},
  {path: 'speech', component: SpeechRecognitionComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
