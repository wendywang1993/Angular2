
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SingleHero} from '../single-hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'my-heroes',
  styleUrls: ['./hero.css'],
  templateUrl: './hero.html',
  
})
 
 export class Hero {
     title = 'Tour of Heroes';  
     heroes:SingleHero[] = []; 
     selectedHero:SingleHero;
     constructor(private router:Router,private heroService:HeroService,private route:ActivatedRoute){}
     
     onselect(hero:SingleHero):void{
         this.selectedHero = hero;
     }
     gotoDetail():void{
         this.router.navigate(['hero','detail', this.selectedHero.id]);
     }
      getHeroes():void{
         this.heroService.getHeroes().then(heroes => this.heroes = heroes);
     }
     ngOnInit():void{
         this.getHeroes();
     }
 }