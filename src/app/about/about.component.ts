import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "about",
    templateUrl: "about.component.html",
})
export class AboutComponent implements OnInit {
    constructor(private page: Page) {
        page.actionBarHidden = false;
    }

    ngOnInit() {}
}
