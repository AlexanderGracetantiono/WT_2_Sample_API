import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { GameService } from "./game.service";

@Component({
    selector: "ns-details",
    templateUrl: "./game-detail.component.html"
})
export class GameDetailComponent implements OnInit { 
    name;
    pokemon;

    constructor(private route: ActivatedRoute, private ps: GameService) { }

    ngOnInit(): void {
        console.log("name:", this.route.snapshot.params.id)
        this.name = this.route.snapshot.params.id;
        this.ps.getGame(this.name).subscribe(
            response => {
                console.log("RES: ",response[0]);
                this.pokemon = response[0];
            }
        )
    }
}
