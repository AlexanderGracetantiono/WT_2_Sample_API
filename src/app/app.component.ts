import { Component, OnInit } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    ngOnInit() {
        firebase.init({}).then(
            () => {
                console.log("firebase.init done");
            },
            (error) => {
                console.log(`firebase.init error: ${error}`);
            }
        );
    }
}
