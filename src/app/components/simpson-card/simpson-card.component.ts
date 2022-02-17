import { Component, Input, OnInit } from '@angular/core';
import { SimpsonModel } from 'src/app/models/simpson.model';

@Component({
  selector: 'app-simpson-card',
  templateUrl: './simpson-card.component.html',
  styleUrls: ['./simpson-card.component.scss']
})
export class SimpsonCardComponent implements OnInit {

  @Input() simpsonRquest: SimpsonModel = {};

  ngOnInit(): void {
  }

}
