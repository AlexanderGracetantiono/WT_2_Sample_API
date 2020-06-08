import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PokemonService } from "./pokemon.service";

@Component({
    selector: "ns-details",
    templateUrl: "./pokemon-detail.component.html"
})
export class PokemonDetailComponent implements OnInit { 
    name;
    pokemon;

    constructor(private route: ActivatedRoute, private ps: PokemonService) { }

    ngOnInit(): void {
        this.name = this.route.snapshot.params.name;
        this.ps.getPokemon(this.name).subscribe(
            response => {
                this.pokemon = response;
            }
        )
    }
}
