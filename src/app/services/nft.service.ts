import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NftInterface} from "../interfaces/nft-interface";

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(private http: HttpClient) { }

  getAllNfts():Observable<NftInterface[]>{
     return this.http.get<NftInterface[]>("https://127.0.0.1:8000/api/nft/");
  }

  deleteNft(id: number){
    return this.http.delete<NftInterface>("https://127.0.0.1:8000/api/nft/"+id)
  }
}
