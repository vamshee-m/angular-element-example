import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HeartComponent } from './heart.component';

@NgModule({
  declarations: [
    HeartComponent
  ],
  entryComponents: [
    HeartComponent
  ]
})
export class HeartModule {
  constructor(private injector: Injector) {
    const heartElement = createCustomElement(HeartComponent, { injector });

    customElements.define('sample-heart', heartElement);
  }
}