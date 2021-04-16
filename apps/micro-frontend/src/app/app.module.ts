import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from '@micro-frontend/header';
import { FooterModule } from '@micro-frontend/footer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, HeaderModule, FooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
