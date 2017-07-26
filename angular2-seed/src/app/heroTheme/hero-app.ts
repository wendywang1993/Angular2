 import {Component} from '@angular/core';


 @Component({
    selector:'my-heroApp',
    template: `
   <h1>{{title}}</h1>
   <nav>
     <a [routerLink]="['/hero','dashboard']" routerLinkActive="active">Dashboard</a>
     <a [routerLink]="['/hero','heroes']" routerLinkActive="active">Heroes</a>
   </nav>
   <router-outlet></router-outlet>
 `,
     styleUrls:['./hero-app.css'],

 })
 export class HeroAppComponent {
     title = 'Tour of Heroes';
    
 }