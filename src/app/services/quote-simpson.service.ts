import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpsonModel } from '../models/simpson.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteSimpsonService {

  constructor(private _http: HttpClient) { }

  public getCharacters(): Observable<SimpsonModel[]> {
    return this._http.get<SimpsonModel[]>('https://thesimpsonsquoteapi.glitch.me/quotes?count=10');
  }

}
