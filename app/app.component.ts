import { Component } from "@angular/core";
import { Helpers } from "./shared/helpers";
import { ROUTER_DIRECTIVES } from '@angular/router';
import {ViewEncapsulation} from '@angular/core';


@Component({
    selector: "app",
    templateUrl: Helpers.getTemplatePath("app"),
    directives: [
        ROUTER_DIRECTIVES
    ],
    styleUrls: ['../node_modules/bootstrap/dist/sass/bootstrap.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent{

    name: string;
    
    constructor(){
        this.name = "Angular 2";
        document.title = this.name; 
    }
}