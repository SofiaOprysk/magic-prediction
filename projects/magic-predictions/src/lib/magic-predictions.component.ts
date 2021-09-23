import { Component } from '@angular/core';
import { Prediction } from './prediction';

const predictions = [
  {text: 'You Lazy Bastard! Get back to Work', color: 'red'},
  {text: 'You will be hungry again in one hour', color: 'blue'},
  {text: 'If we don\'t change, we don\'t grow ', color: 'green'},
  {text: 'If you can read this, you did attend a school', color: 'yellow'},
  {text: 'Wine gives courage and makes men more apt for passion', color: 'blue'},
  {text: 'No many no honey', color: 'red'},
]

@Component({
  selector: 'mp-magic-predictions',
  template: `
    <div class="magic-predictions">
      <div class="magic-predictions_content">
        <div class="magic-predictions_button">
          <button type="button" (click)="getPrediction()">Click Me!</button>
        </div>
        <p [ngClass]="setStyle()">
          {{prediction?.text}}
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./magic-predictions.component.scss']
})

export class MagicPredictionsComponent {
  prediction!: Prediction;

  getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  getPrediction() {
    const key = this.getRandomNumber(predictions.length);
    this.prediction  = predictions[key];
  }

  setStyle() {
    return this.prediction?.color;
  }
}
