import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: "root"
})
export class CovidService {
    baseUrl = `https://api.covid19api.com`;
    tokenRapiAPI = "60f7f7a0e0msh51ed54d5328dd69p12f043jsn5414e5a6e4ce";
    hostKey = "covid-19-data.p.rapidapi.com";

    constructor(private http: HttpClient){

    }
    getCovid() {
        return this.http.get(
            `${this.baseUrl}/summary`
        )
    }
    getCountry() {
        return this.http.get(
            `${this.baseUrl}/help/countries`,
            { headers: this.getCommonHeaders() }
        )
    }
    
    getCommonHeaders() {
        return {
            "Content-Type": "application/json",
            "x-rapidapi-host": this.hostKey,
            "x-rapidapi-key": this.tokenRapiAPI,
        }
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
