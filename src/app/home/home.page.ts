import { Component, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { ModelCat } from '../interface/model-cat';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arrayCat:ModelCat[] = [];
  auxArrayCat:ModelCat[] = [];
  inicio = 0;
  fin = 10;

  constructor(
    private _cat: CatService
  ) {
    this.cargarListaCat();
  }

  cargarListaCat() {
    this._cat.getAllCat().subscribe((res: ModelCat[]) => {
      this.arrayCat = res;
      this.paginar();
      console.log(this.arrayCat);
    })
  }

  onIonInfinite(event?:any) {
    if (this.auxArrayCat.length === this.arrayCat.length) {
      if (event) {
        event.target.complete();
      }
      return;
    }
    this.paginar();
    if (event) {
      event.target.complete();
    }
  }

  paginar() {
    const nuevoArr = this.arrayCat.slice(this.inicio, this.fin);
    this.auxArrayCat.push(...nuevoArr);
    this.inicio = this.fin;
    this.fin = this.fin + 10;
  }

  errorImeg(event:any) {
    console.log(event);
    event.target.src = '../../assets/icon/favicon.png';
    return true;
  }

}
