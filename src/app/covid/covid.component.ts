import { Component, OnInit } from "@angular/core";
import { CovidService } from "./covid.service";
import { BehaviorSubject } from "rxjs";


@Component({
    selector: "ns-covid",
    templateUrl: "./covid.component.html"
})
export class CovidComponent implements OnInit {
    countries = [];
    globalSum = {};
    countries$: BehaviorSubject<Array<any>>;
    idxstart = 0;

    constructor(private ps: CovidService) {
        this.countries$ = new BehaviorSubject([]);
     }

    ngOnInit(): void {
        this.ps.getCovid().subscribe((response: any) => {
           this.countries.push( ... response.Countries);
           this.globalSum = response.Global;
           console.log("DATAS:",response)
           this.countries$.next(this.countries);
        });
    }

    loadMore(){
        this.idxstart+=20;
        // this.ps.getPokemons(this.idxstart).subscribe((response: any) => {
        //     this.pokemons.push( ... response.results);
        //     this.pokemons$.next(this.pokemons);
        //  });
    }
}
