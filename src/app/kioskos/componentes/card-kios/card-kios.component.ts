import { Component, Input, OnInit } from '@angular/core';
import { Kiosko } from '../../interfaces/kiosko.inteface';

@Component({
  selector: 'app-card-kios',
  templateUrl: './card-kios.component.html',
  styleUrls: ['./card-kios.component.scss']
})
export class CardKiosComponent implements OnInit {

  @Input () kiosko : Kiosko | undefined ;
  
  constructor() { }

  ngOnInit(): void {

  }

  
}
