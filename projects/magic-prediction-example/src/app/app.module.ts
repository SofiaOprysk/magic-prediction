import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MagicPredictionsModule } from 'magic-predictions'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MagicPredictionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
