import { Component } from '@angular/core';
import {EthService} from "../services/eth.service";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-eth-add-form',
  templateUrl: './eth-add-form.component.html',
  styleUrls: ['./eth-add-form.component.css']
})
export class EthAddFormComponent {

  constructor(private ethService: EthService) { }

  onSubmit(form: NgForm): void {
    this.ethService.addEth(form.value).subscribe(data=>{

    });

  }
}
