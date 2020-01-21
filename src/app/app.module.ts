import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneSystemModule } from './phone-system/phone-system.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhoneSystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
