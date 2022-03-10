import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor( private GifsServices: GifsService) { }

  get historial(){
    return this.GifsServices.historial;
  }

  buscar(termino : string){
    this.GifsServices.buscarGifs(termino);
  }
}
