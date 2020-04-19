import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../components/servicios/heroes.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ],
})
export class HeroesComponent implements OnInit {

  heroes:any[]=[];

  constructor(   private _heroesService:HeroesService
                ,private _router:Router) { 
   // console.log("heroes");
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe(index:number){
    this._router.navigate(['/heroe',index]);
  }



}
