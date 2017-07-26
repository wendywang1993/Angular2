import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
//启动点
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
