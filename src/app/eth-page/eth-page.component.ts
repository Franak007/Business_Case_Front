import {Component, OnInit} from '@angular/core';
import {EthService} from "../eth.service";
import {EthInterface} from "../eth-interface";
import {Observable} from "rxjs";


@Component({
  selector: 'app-eth-page',
  templateUrl: './eth-page.component.html',
  styleUrls: ['./eth-page.component.css']
})
export class EthPageComponent implements OnInit{

  ethList: EthInterface[] =[];
  ethParent: EthInterface | undefined;
  ethSelected: EthInterface | undefined;
  constructor(private ethService: EthService) {}

  ngOnInit() {
    this.ethService.getAllEth().subscribe(data=>{
      this.ethList = data;
    })
  }

  getidEth(id: number) {
    this.ethService.getOneEth(id).subscribe(data=>{
      this.ethSelected = data;
      console.log(this.ethSelected);
    })
  }

  selectEth(eth:EthInterface){
    this.ethParent = eth;
  }
}
