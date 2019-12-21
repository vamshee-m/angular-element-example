import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { LogoutComponent } from './logout.component';
import { ModalComponent } from 'src/app/modal/modal.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    LogoutComponent,
    ModalComponent
  ],
  entryComponents: [
    LogoutComponent,
    ModalComponent
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