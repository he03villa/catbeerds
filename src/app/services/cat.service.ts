import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModelCat } from '../interface/model-cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllCat(): Observable<ModelCat[]> {
    const url = environment.urlAPI;
    const httpOptions = {
      headers: new HttpHeaders({
        'x-api-key': environment.header,
      })
    };
    return this._http.get<ModelCat[]>(url, httpOptions);
  }
}
