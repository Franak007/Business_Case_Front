import {Component, OnInit} from '@angular/core';
import {EthService} from "../eth.service";
import {EthInterface} from "../eth-interface";


@Component({
  selector: 'app-eth-page',
  templateUrl: './eth-page.component.html',
  styleUrls: ['./eth-page.component.css']
})
export class EthPageComponent implements OnInit{

  constructor(private ethService: EthService) {}

    ethList: EthInterface[] =[];

  ngOnInit() {
    this.ethService.getAllEth().subscribe(data=>{
      this.ethList = data;
    })
  }

}
