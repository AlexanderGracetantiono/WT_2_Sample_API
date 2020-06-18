import { Component, OnInit } from "@angular/core";
import {  HarryService } from "./harrypo.service";
import { BehaviorSubject } from "rxjs";


@Component({
    selector: "ns-harrys",
    templateUrl: "./harrypo.component.html"
})
export class  HarryComponent implements OnInit {
    hps = [];
    hps$: BehaviorSubject<Array<any>>;

    constructor(private ps: HarryService) {
        this.hps$ = new BehaviorSubject([]);
     }

    ngOnInit(): void {
        this.ps.getHarrys().subscribe((response: any) => {
            console.log("Hrr: ",response)
           this.hps.push( ... response);
           this.hps$.next(this.hps);
        });
    }
}
