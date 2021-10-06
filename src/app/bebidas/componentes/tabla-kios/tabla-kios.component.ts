import { Component, Input, OnInit } from '@angular/core';
import { Kiosko } from '../../interfaces/kiosko.inteface';

@Component({
  selector: 'app-tabla-kios',
  templateUrl: './tabla-kios.component.html',
  styleUrls: ['./tabla-kios.component.scss']
})
export class TablaKiosComponent implements OnInit {

 @Input () kiosko : Kiosko | undefined ;
  

  constructor() { }

  ngOnInit(): void {

  }

}
