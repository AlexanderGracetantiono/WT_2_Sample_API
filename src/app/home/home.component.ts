import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterExtensions } from 'nativescript-angular/router';

import * as dialog from "tns-core-modules/ui/dialogs";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    user: User = { username: "username", password: "password" };
    loginForm: FormGroup = this.fb.group({
        username: [this.user.username, [Validators.required]],
        password: [this.user.password, [Validators.required]],
    })

    username = this.loginForm.get("username");
    password = this.loginForm.get("password");

    constructor(
        private page: Page,
        private fb: FormBuilder,
        private router: RouterExtensions,
    ) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
     
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
            case "game":
                this.router.navigate(["/game"]);
                break;
        
            default:
                break;
        }
    }
}
