import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/gifInterface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent{

  public ultimosResultados : Gif[] = [];

  get resultados(){
    return this.GifsServices.search;
  }

  constructor(private GifsServices : GifsService) { 
  }


  
}
