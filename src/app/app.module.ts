import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeakerComponent } from './components/speaker/speaker.component';
import { SpeechComponent } from './components/speech/speech.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Ng2FittextModule} from "ng2-fittext";

@NgModule({
  declarations: [
    AppComponent,
    SpeakerComponent,
    SpeechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ng2FittextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
