import { Component, Input, OnInit } from '@angular/core';
import { RESOURCES_CONSTANTS } from 'src/app/constants/resources.constants';
import { SimpsonModel } from 'src/app/models/simpson.model';

@Component({
  selector: 'app-simpson-card',
  templateUrl: './simpson-card.component.html',
  styleUrls: ['./simpson-card.component.scss']
})
export class SimpsonCardComponent implements OnInit {

  @Input() simpsonRquest: SimpsonModel = {};
  public resources = RESOURCES_CONSTANTS.DEFAULT_RESOURCES;

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void{
    if (this.simpsonRquest.image == null) {
      this.simpsonRquest.image = this.resources.IMAGE;
    }
  }

}
