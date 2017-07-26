import {Routes} from '@angular/router';
import {About} from './about/about';
import {Home} from './home/home';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import {SingleHero} from './heroTheme/single-hero';
import {HeroDetail} from './heroTheme/hero-detail/hero-detail'
import {Hero} from './heroTheme/hero/hero';
import {HeroAppComponent} from './heroTheme/hero-app';
import {DashboardComponent} from './heroTheme/dashboard/dashboard'
 
export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', terminal: true},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'github', component: RepoBrowser,
    children: [
      {path: '', component: RepoList},
      {path: ':org', component: RepoList,
        children: [
          {path: '', component: RepoDetail},
          {path: ':repo', component: RepoDetail}
        ]
      }]
  },
  {path:'hero',component:HeroAppComponent,
   children:[  
     {path:'',component:DashboardComponent},   
     {path:'dashboard',component:DashboardComponent},
     {path:'heroes',component:Hero},
     {path:'detail/:id',component:HeroDetail}    
  ] },
  

];

