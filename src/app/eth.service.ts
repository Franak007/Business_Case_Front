import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NftInterface} from "./nft-interface";

@Injectable({
  providedIn: 'root'
})
export class EthService {

  constructor(private http: HttpClient ) { }

  getAllEth():Observable<NftInterface[]>{
    return this.http.get<NftInterface[]>("https://127.0.0.1:8000/api/eth/");
  }
}
