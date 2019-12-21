import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LogoutModule } from './logout-module/logout.module';
import { MadeWithLoveModule } from './made-with-love/made-with-love.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LogoutModule,
    MadeWithLoveModule
  ]
})
export class AppModule {
    ngDoBootstrap() { }
}
