import { Component, OnInit } from '@angular/core';
import { QuoteSimpsonService } from 'src/app/services/quote-simpson.service';
import { SimpsonModel } from '../../models/simpson.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public charactersSimpson: SimpsonModel[] = [];

  constructor(private simpsonService: QuoteSimpsonService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.simpsonService.getCharacters()
    .subscribe(response => {
      this.charactersSimpson = response;
    });

  }

}
