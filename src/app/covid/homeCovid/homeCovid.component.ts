import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { CovidService } from "../covid.service";
import { RouterExtensions } from 'nativescript-angular/router';
@Component({
    selector: "ns-details",
    templateUrl: "./homeCovid.component.html",
    styleUrls: ['./homeCovid.component.css']
})
export class HomeCovidComponent implements OnInit { 
    name;
    globalSum;

    constructor(
        private route: ActivatedRoute, 
        private ps: CovidService,
        private page: Page,//definisikan page
        private router: RouterExtensions,
        ) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;// hilangkan actions bar
        this.name = this.route.snapshot.params.name;
        this.ps.getCovid().subscribe((response: any) => {
            this.globalSum = response.Global;
         });
    }
    onTap(name:String){
        switch (name) {
            case "countrylist":
                this.router.navigate(["/covidcountry"]);
                break;
        
            default:
                break;
        }
    }
}
