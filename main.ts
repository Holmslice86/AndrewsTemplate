import { bootstrap } from "@angular/platform-browser-dynamic";
import { AppComponent } from "./app/app.component";
import { APP_ROUTER_PROVIDERS } from "./app/app.routes";
import 'jquery';
import 'bootstrap-loader';

bootstrap(AppComponent, APP_ROUTER_PROVIDERS)
    .catch(err => console.error(err));;