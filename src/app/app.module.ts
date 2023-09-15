import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './error404/error404.component';
import { NftPageComponent } from './nft-page/nft-page.component';
import { NftListeComponent } from './nft-liste/nft-liste.component';
import {HttpClientModule} from "@angular/common/http";
import { EthPageComponent } from './eth-page/eth-page.component';
import { EthChildComponent } from './eth-child/eth-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Error404Component,
    NftPageComponent,
    NftListeComponent,
    EthPageComponent,
    EthChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
