import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpsonModel } from '../models/simpson.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteSimpsonService {

  private URL_BASE = environment.base_url;

  constructor(private _http: HttpClient) { }

  public getCharacters(quantityQuotes: number = 10): Observable<SimpsonModel[]> {
    return this._http.get<SimpsonModel[]>(`${this.URL_BASE}/quotes?count=${quantityQuotes}`);
  }

}
