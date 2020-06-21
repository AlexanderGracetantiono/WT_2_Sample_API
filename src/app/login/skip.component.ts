import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { setTimeout } from "tns-core-modules/timer";

import * as dialog from "tns-core-modules/ui/dialogs";

@Component({
    selector: 'skip',
    templateUrl: 'skip.component.html'
})

export class SkipComponent implements OnInit {
    linkIMG: String;
    title: String;

    constructor(
        private page: Page,
        private fb: FormBuilder,
        private ls: LoginService,
        private router: RouterExtensions,
    ) {
        page.actionBarHidden = true;
    }

    ngOnInit() {
        setTimeout(() => {
            this.title = "You skip ?";
            setTimeout(() => {
                this.linkIMG = "~/app/images/sad2.jpg";
                this.title = "Doge is so sad!";
                setTimeout(() => {
                    this.linkIMG = "~/app/images/sad1.jpg";
                    this.title = "Doge thought you frend!";
                    setTimeout(() => {
                        this.linkIMG = "~/app/images/sad2.jpg";
                        this.title = "Doge overcome the sadness";
                        setTimeout(() => {
                            this.linkIMG = "~/app/images/watchingyou.jpg";
                            this.title = "Doge always watching you";
                            setTimeout(() => {
                                this.router.navigate(["/home"], { clearHistory: true });
                            }, 2000);
                        }, 2500);
                    }, 2500);
                }, 3500);
            }, 2300);
        }, 2300);


    }
}
