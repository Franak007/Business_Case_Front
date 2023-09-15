import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {Error404Component} from "./error404/error404.component";
import {NftPageComponent} from "./nft-page/nft-page.component";
import {EthPageComponent} from "./eth-page/eth-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nft', component: NftPageComponent},
  {path: 'eth', component: EthPageComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
