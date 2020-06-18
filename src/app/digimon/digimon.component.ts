import { Component, OnInit } from "@angular/core";
import { DigimonService } from "./digimon.service";
import { BehaviorSubject } from "rxjs";


@Component({
    selector: "ns-digimons",
    templateUrl: "./digimon.component.html"
})
export class DigimonComponent implements OnInit {
    pokemons = [];
    pokemons$: BehaviorSubject<Array<any>>;
    idxstart = 0;

    constructor(private ps: DigimonService) {
        this.pokemons$ = new BehaviorSubject([]);
     }

    ngOnInit(): void {
        this.ps.getDigimons().subscribe((response: any) => {
           this.pokemons.push( ... response);
           this.pokemons$.next(this.pokemons);
        });
    }

    loadMore(){
        this.idxstart+=20;
        this.ps.getDigimons().subscribe((response: any) => {
            this.pokemons.push( ... response.results);
            this.pokemons$.next(this.pokemons);
         });
    }
}
