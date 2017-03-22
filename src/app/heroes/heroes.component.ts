import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 heroes : Hero[]; //= HEROES;
  selectedHero:Hero;
  constructor(private heroService:HeroService){}
  
  getHeroes(): void {
    //this.heroes = 
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

   ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }  
}
