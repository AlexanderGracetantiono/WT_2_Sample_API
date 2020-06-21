import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { LoginService } from '../login/login.service';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
    selector: 'shell',
    templateUrl: 'shell.component.html',
    styleUrls: ['./shell.component.css']
})

export class ShellComponent implements OnInit {
    constructor(private ls: LoginService, private router: RouterExtensions, private page: Page) {
        page.actionBarHidden = true;
     }

    logout() {
        this.ls.logout();
        this.router.navigate(["login"], { clearHistory: true });
    }
    login(){
        this.router.navigate(["about"], { clearHistory: true });
    }
    onTap(name:String){
        switch (name) {
            case "poke":
                this.router.navigate(["/pokemon"]);
                break;
            case "digi":
                this.router.navigate(["/digimon"]);
                break;
            case "harry":
                this.router.navigate(["/harryporter"]);
                break;
            case "logout":
                this.router.navigate(["/login"]);
                break;
            case "about":
                this.router.navigate(["/about"]);
                break;
                case "game":
                    this.router.navigate(["/game"]);
                    break;
                case "covid":
                    this.router.navigate(["/homecovid"]);
                    break;
        
            case "home":
                this.router.navigate(["/home"]);
                break;
        
            default:
                break;
        }
    }
    ngOnInit() { }
}