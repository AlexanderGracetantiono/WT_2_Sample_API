import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { PokemonComponent } from "./pokemon/pokemon.component";
import { PokemonDetailComponent } from "./pokemon/pokemon-detail.component";
import { DigimonComponent } from "./digimon/digimon.component";
import { DigimonDetailComponent } from "./digimon/digimon-detail.component";
import { HarryComponent } from "./harrypo/harrypo.component";
import { CovidComponent } from "./covid/covid.component";
import { GameComponent } from "./game/game.component";
import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import {HomeCovidComponent  } from "./covid/homeCovid/homeCovid.component";
import { SkipComponent } from "./login/skip.component";
const routes: Routes = [
    // Uncomment bawah, kalau mau halaman utama nya login
    // { path: "", redirectTo: "/login", pathMatch: "full" },

    // Uncomment bawah, kalau mau halaman utamnya Skip Login, Pake ini dlu klo login kalian gabisa
    { path: "", redirectTo: "/login", pathMatch: "full" },

    { path: "login", component: LoginComponent },
    {
        path: "",
        component: ShellComponent,
        children: [
            { path: "home", component: HomeComponent },
            { path: "pokemon", component: PokemonComponent },
            { path: "pokemon/:name", component: PokemonDetailComponent },
            { path: "harryporter", component: HarryComponent },
            { path: "digimon", component: DigimonComponent },
            { path: "digimon/:id", component: DigimonDetailComponent },
            { path: "game", component: GameComponent },
            { path: "about", component: AboutComponent },
            { path: "covidcountry", component: CovidComponent },
            { path: "homecovid", component: HomeCovidComponent },
            { path: "skip", component: SkipComponent },
        ],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
