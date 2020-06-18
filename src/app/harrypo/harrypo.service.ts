import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: "root"
})
export class HarryService {
    baseUrl = `https://digimon-api.herokuapp.com/api`;
    baseUrlHP = `http://hp-api.herokuapp.com/api`;

    constructor(private http: HttpClient){

    }

    getHarrys(){
        return this.http.get(`${this.baseUrlHP}/characters`);
    }
    getHarryPorters(){
        return this.http.get(`${this.baseUrlHP}/characters`);
    }

    getHarry(name: string){
        return this.http.get(`${this.baseUrl}/digimon/name/${name}`);
    }
    // getCommonHeaders() {
    //     return {
    //         "Content-Type": "application/json",
    //         "Authorization": Config.authHeader
    //     }
    // }

}
