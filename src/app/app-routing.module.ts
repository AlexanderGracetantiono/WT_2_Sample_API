import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { PokemonComponent } from "./pokemon/pokemon.component";
import { PokemonDetailComponent } from "./pokemon/pokemon-detail.component";
import { DigimonComponent } from "./digimon/digimon.component";
import { DigimonDetailComponent } from "./digimon/digimon-detail.component";
import { HarryComponent } from "./harrypo/harrypo.component";
import { HarryDetailComponent } from "./harrypo/harrypo-detail.component";
import { GameComponent } from "./game/game.component";
import { GameDetailComponent } from "./game/game-detail.component";
import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    // Uncomment bawah, kalau mau halaman utama nya login
    // { path: "", redirectTo: "/login", pathMatch: "full" },

    // Uncomment bawah, kalau mau halaman utamnya Skip Login, Pake ini dlu klo login kalian gabisa
    { path: "", redirectTo: "/home", pathMatch: "full" },

    { path: "login", component: LoginComponent },
    {
        path: "",
        component: ShellComponent,
        children: [
            { path: "home", component: HomeComponent },
            { path: "pokemon", component: PokemonComponent },
            { path: "pokemon/:name", component: PokemonDetailComponent },
            { path: "harryporter", component: HarryComponent },
            { path: "harryporter/:id", component: HarryDetailComponent },
            { path: "digimon", component: DigimonComponent },
            { path: "digimon/:id", component: DigimonDetailComponent },
            { path: "game", component: GameComponent },
            { path: "game/:id", component: GameDetailComponent },
            { path: "about", component: AboutComponent },
        ],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
