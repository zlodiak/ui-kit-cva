import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NumberInputComponent } from './ui-kit/number-input/number-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberInputComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
