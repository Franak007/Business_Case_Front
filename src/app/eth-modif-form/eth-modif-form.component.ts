import {Component, OnInit} from '@angular/core';
import {EthService} from "../services/eth.service";
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {EthInterface} from "../interfaces/eth-interface";

@Component({
  selector: 'app-eth-modif-form',
  templateUrl: './eth-modif-form.component.html',
  styleUrls: ['./eth-modif-form.component.css']
})
export class EthModifFormComponent implements OnInit {

  constructor(private ethService: EthService, private route: ActivatedRoute) {  }

  selectedEth: EthInterface|undefined;

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.ethService.getOneEth(params['id']).subscribe(data=>{
        this.selectedEth = data;
        console.log(this.selectedEth);
        return this.selectedEth;
      })
    })
  }

  onsubmit(form: NgForm): void {
    console.log(form.value);
    this.ethService.updateEth(form.value).subscribe(data=>{
    });
    window.location.href = "/eth";

  }
}
