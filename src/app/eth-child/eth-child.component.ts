import {Component, Input} from '@angular/core';
import {EthInterface} from "../interfaces/eth-interface";

@Component({
  selector: 'app-eth-child',
  templateUrl: './eth-child.component.html',
  styleUrls: ['./eth-child.component.css']
})
export class EthChildComponent {
  @Input() ethC: EthInterface | undefined;
}
