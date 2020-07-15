import { Component, OnInit } from '@angular/core';

import * as tf from '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands';

let recognizer = speechCommands.create('BROWSER_FFT');
@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.scss']
})
export class SpeechRecognitionComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    this.temp()
  }

  async temp() {
    const recognizer = speechCommands.create('BROWSER_FFT');

    // Make sure that the underlying model and metadata are loaded via HTTPS
    // requests.
    await recognizer.ensureModelLoaded();

    // See the array of words that the recognizer is trained to recognize.
    const words = recognizer.wordLabels();
    console.log(words);

    // `listen()` takes two arguments:
    // 1. A callback function that is invoked anytime a word is recognized.
    // 2. A configuration object with adjustable fields such a
    //    - includeSpectrogram
    //    - probabilityThreshold
    //    - includeEmbedding
    
    // uncomment it after starting the server

    // recognizer.listen(({scores}) => {
    //   // Turn scores into a list of (score,word) pairs.
    //     scores = Array.from(scores).map((s, i) => ({score: s, word: words[i]}));
    //     // Find the most probable word.
    //     scores.sort((s1, s2) => s2.score - s1.score);
    //     console.log(scores[0].word);
        
    // }, {
    //   includeSpectrogram: true,
    //   probabilityThreshold: 0.75
    // });

    // // Stop the recognition in 10 seconds.
    // setTimeout(() => recognizer.stopListening(), 10e3);

    // uncomment it after starting the server

  }

}