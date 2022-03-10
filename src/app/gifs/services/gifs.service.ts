import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse, Gif } from '../interfaces/gifInterface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'dq7nu1cDB3h7AvsY1MdPbg0JDIO2KRaX';
  private serviceURL: string = 'https://api.giphy.com/v1/gifs/';
  private _historial : string[] = [];
  //TODO: Cambiar Any por su tipado;
  public search : Gif[] = [];

  get historial(){
    return [...this._historial];
  }
  //Local Storage y servicio de gif
  constructor(private http : HttpClient){
      this._historial = JSON.parse(localStorage.getItem('historial')!) || [];  
      this.search = JSON.parse(localStorage.getItem('ultimosResultados')!) || [];
  }

  buscarGifs(query : string){
      query = query.trim().toLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));

    }
    
    const parameters = new HttpParams().set('api_key' , this.apiKey)
    .set('q', query)
    .set('limit', '10');

    this.http.get<SearchGIFResponse>(`${this.serviceURL}search`, {params : parameters})
        .subscribe((response) =>{
          this.search = response.data;
          localStorage.setItem('ultimosResultados',JSON.stringify(this.search));
        } )
  }
}
