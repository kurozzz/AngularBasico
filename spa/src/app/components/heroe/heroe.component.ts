import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../servicios/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ],
})
export class HeroeComponent  {

  heroe:any ={};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesServices: HeroesService,
              private _router: Router) {


    this.activatedRoute.params.subscribe(params =>{
      this.heroe = this._heroesServices.getHeroe(params['id']);
      console.log(this.heroe);
    });
   }

  regresar(){
    this._router.navigate(['/heroes']);
  }


}
