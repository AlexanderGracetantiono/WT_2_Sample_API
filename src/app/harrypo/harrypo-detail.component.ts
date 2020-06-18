import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { HarryService } from "./harrypo.service";

@Component({
    selector: "ns-details",
    templateUrl: "./harrypo-detail.component.html"
})
export class HarryDetailComponent implements OnInit { 
    name;
    pokemon;

    constructor(private route: ActivatedRoute, private ps: HarryService) { }

    ngOnInit(): void {
        console.log("name:", this.route.snapshot.params.id)
        this.name = this.route.snapshot.params.id;
        this.ps.getHarry(this.name).subscribe(
            response => {
                console.log("RES: ",response[0]);
                this.pokemon = response[0];
            }
        )
    }
}
