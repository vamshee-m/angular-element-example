import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { SampleElementModule } from './sample-element/sample-element.module';

@NgModule({
  imports: [
    BrowserModule,
    SampleElementModule
  ]
})
export class AppModule {
  ngDoBootstrap() { }
}