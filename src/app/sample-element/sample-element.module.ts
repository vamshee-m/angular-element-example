import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { HeartModule } from './heart/heart.module';
import { HeartComponent } from './heart/heart.component';
import { SampleElementComponent } from './sample-element.component';
import { LogoutModule } from './logout/logout.module';

@NgModule({
  imports: [
    CommonModule,
    HeartModule,
    LogoutModule
  ],
  declarations: [
    SampleElementComponent
  ],
  entryComponents: [
    SampleElementComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SampleElementModule {
  constructor(private injector: Injector) {
    const sampleElement = createCustomElement(SampleElementComponent, { injector });

    customElements.define('sample-element', sampleElement);
  }
}