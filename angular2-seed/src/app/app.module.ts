import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {Github} from "./github/shared/github";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {About} from './about/about';
import {Home} from './home/home';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Hero} from './heroTheme/hero/hero';
import {HeroDetail} from './heroTheme/hero-detail/hero-detail';
import {HeroAppComponent} from './heroTheme/hero-app';
import {DashboardComponent} from './heroTheme/dashboard/dashboard';
import {HeroService} from './heroTheme/hero.service';
// Imports for loading & configuring the in-memory web api

@NgModule({
  declarations: [AppComponent, About, RepoBrowser, RepoList, RepoDetail, Home,Hero,HeroDetail,HeroAppComponent,DashboardComponent],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],//这里配置了路由
  providers   : [Github, {provide: LocationStrategy, useClass: PathLocationStrategy},HeroService],
  bootstrap   : [AppComponent]//启动点指向AppComponent
})
export class AppModule {

}
