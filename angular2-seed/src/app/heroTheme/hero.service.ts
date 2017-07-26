import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {SingleHero} from './single-hero';
import 'rxjs/add/operator/toPromise';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService{
    
    constructor(private http:Http){}
    getHeroes():Promise<SingleHero[]>
    {
       return Promise.resolve(HEROES);
    }

    


    getHeroesSlowly():Promise<SingleHero[]>{
        return new Promise(resolve =>{
            setTimeout(()=>resolve(this.getHeroes()),2000);
        })
    }
    
    
    getHero(id:number):Promise<SingleHero>{
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id == id));
    }

}