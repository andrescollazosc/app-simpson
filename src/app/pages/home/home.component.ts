import { Component, OnInit } from '@angular/core';
import { QuoteSimpsonService } from 'src/app/services/quote-simpson.service';
import { SimpsonModel } from '../../models/simpson.model';
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public charactersSimpson: SimpsonModel[] = [];
  public isLoading: boolean = true;


  constructor(private simpsonService: QuoteSimpsonService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.simpsonService.getCharacters()
    .pipe(finalize(()=>{
      this.isLoading = false;

      this.charactersSimpson.push(
        {
          character: "Rafita",
          quote: "Delete Prod"
        }
      );
    }))
    .subscribe(response => {
      this.charactersSimpson = response;
    });

  }

}
