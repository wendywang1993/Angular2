
import {Component,Input,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../hero.service';
import {SingleHero} from '../single-hero';
import 'rxjs/add/operator/switchMap';



@Component({
    selector:"hero-detail",
    styleUrls:['./hero-detail.css'],
    templateUrl:"./hero-detail.html"
})


export class HeroDetail implements OnInit{
 constructor(
   private heroService: HeroService,
   private route: ActivatedRoute,
   private location: Location
 ){} 
   @Input() hero:SingleHero;
   ngOnInit():void{
       this.route.params.switchMap((params:Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
   }
   goBack():void{
       this.location.back();
   }
}