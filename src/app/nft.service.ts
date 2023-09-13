import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NftInterface} from "./nft-interface";

@Injectable({
  providedIn: 'root'
})
export class NftService {

  header = {
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'content-type': 'application/json'
  };

  constructor(private http: HttpClient) { }

  getAllNfts():Observable<NftInterface[]>{
     return this.http.get<NftInterface[]>("https://127.0.0.1:8001/nft/", {'headers': this.header});
  }
}
