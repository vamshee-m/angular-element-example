import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LogoutComponent
  ],
  entryComponents: [
    LogoutComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LogoutModule { 

   constructor(private injector: Injector) {
    const logoutElement = createCustomElement(LogoutComponent, { injector });

    customElements.define('app-logout', logoutElement);
  }
}