import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DigimonService } from "./digimon.service";

@Component({
    selector: "ns-details",
    templateUrl: "./digimon-detail.component.html"
})
export class DigimonDetailComponent implements OnInit { 
    name;
    Digimon;

    constructor(private route: ActivatedRoute, private ps: DigimonService) { }

    ngOnInit(): void {
        console.log("name:", this.route.snapshot.params.id)
        this.name = this.route.snapshot.params.id;
        this.ps.getDigimon(this.name).subscribe(
            response => {
                console.log("RES: ",response[0]);
                this.Digimon = response[0];
            }
        )
    }
}
