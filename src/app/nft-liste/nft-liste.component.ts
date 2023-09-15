import {Component, OnInit} from '@angular/core';
import {NftInterface} from "../nft-interface";
import {NftService} from "../nft.service";

@Component({
  selector: 'app-nft-liste',
  templateUrl: './nft-liste.component.html',
  styleUrls: ['./nft-liste.component.css']
})
export class NftListeComponent implements OnInit{

  nftList: NftInterface[] = [];

  constructor(private serviceNft: NftService) {}
    ngOnInit() {
      this.serviceNft.getAllNfts().subscribe(data=>{
        this.nftList = data;
       // console.log(this.nftList);
      });
    }

    suppressNft(id:number, index: number){
    this.serviceNft.deleteNft(id).subscribe(data=>{
      this.nftList.splice(index,1);
    })
    }



}
