import { Component, OnInit } from "@angular/core";
import {  GameService } from "./game.service";
import { BehaviorSubject } from "rxjs";


@Component({
    selector: "ns-games",
    templateUrl: "./game.component.html"
})
export class  GameComponent implements OnInit {
    hps = [];
    hps$: BehaviorSubject<Array<any>>;

    constructor(private ps: GameService) {
        this.hps$ = new BehaviorSubject([]);
     }

    ngOnInit(): void {
        this.ps.getGames().subscribe((response: any) => {
            console.log("Hrr: ",response.results)
           this.hps.push( ... response.results);
           this.hps$.next(this.hps);
        });
    }
}
