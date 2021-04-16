import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from '@micro-frontend/header';
import { FooterModule } from '@micro-frontend/footer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'micro-frontend' }),
    HttpClientModule,
    TransferHttpCacheModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
