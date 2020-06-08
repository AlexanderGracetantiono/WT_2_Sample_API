import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: "root"
})
export class PokemonService {
    baseUrl = `https://pokeapi.co/api/v2`;

    constructor(private http: HttpClient){

    }

    getPokemons(idxstart=0){
        if(idxstart){
        return this.http.get(`${this.baseUrl}/pokemon?offset=${idxstart}`);
        } else {
            return this.http.get(`${this.baseUrl}/pokemon`);
        }
    }

    getPokemon(name: string){
        return this.http.get(`${this.baseUrl}/pokemon/${name}`);
    }
}
