import { Component, OnInit } from '@angular/core';
import { EosService } from '../services/eos.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  data: any;

  constructor(private eosService: EosService) {
  }

  ngOnInit() {
    this.data = this.eosService.eos.getInfo({});
  }

}
