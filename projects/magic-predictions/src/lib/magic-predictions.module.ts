import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MagicPredictionsComponent } from './magic-predictions.component';



@NgModule({
  declarations: [
    MagicPredictionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MagicPredictionsComponent
  ]
})
export class MagicPredictionsModule { }
