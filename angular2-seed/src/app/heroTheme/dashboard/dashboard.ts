import {Component,OnInit} from '@angular/core';
import {HeroService} from '../hero.service';
import {SingleHero} from '../single-hero';

@Component({
    selector:'my-dashboard',
    templateUrl:'./dashboard.html',
    styleUrls: ['./dashboard.css'],
})
export  class DashboardComponent implements OnInit{
     heroes:SingleHero[] = [];
     constructor(private heroService:HeroService){

     }
     ngOnInit():void{
          this.getHeroes();
     }
     getHeroes():void{
         this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
     }
}