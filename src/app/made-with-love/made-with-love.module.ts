import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { HeartModule } from './heart/heart.module';
import { HeartComponent } from './heart/heart.component';
import { MadeWithLoveComponent } from './made-with-love.component';

@NgModule({
  imports: [
    CommonModule,
    HeartModule
  ],
  declarations: [
    MadeWithLoveComponent
  ],
  entryComponents: [
    MadeWithLoveComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MadeWithLoveModule {
  constructor(private injector: Injector) {
    const madeWithLoveElement = createCustomElement(MadeWithLoveComponent, { injector });

    customElements.define('made-with-love', madeWithLoveElement);
  }
}