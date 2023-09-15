import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NftInterface} from "./nft-interface";
import {EthInterface} from "./eth-interface";

@Injectable({
  providedIn: 'root'
})
export class EthService {

  constructor(private http: HttpClient ) { }

  getAllEth():Observable<EthInterface[]>{
    return this.http.get<EthInterface[]>("https://127.0.0.1:8000/api/eth/");
  }

  getOneEth(id: number):Observable<EthInterface>{
    return this.http.get<EthInterface>('https://127.0.0.1:8000/api/eth/'+id);
  }

  addEth(eth: EthInterface): Observable<EthInterface>{
    const headers = { 'content-type': 'application/x-www-form-urlencoded'}
    const body = JSON.stringify(eth);
    return this.http.post<EthInterface>('https://127.0.0.1:8000/api/eth/add', body, {'headers':headers})
  }
}
