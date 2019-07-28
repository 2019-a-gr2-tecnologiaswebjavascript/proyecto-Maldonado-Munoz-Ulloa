import {Injectable} from "@angular/core";
import {HttpSailsPrincipal} from "./http-sails-principal";
import {Basurero} from "../../dto/basurero";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class BasureroHttpService extends HttpSailsPrincipal<Basurero>{

    constructor(private readonly _HttpClient:HttpClient){
        super(_HttpClient,environment.url,'/Basurero')
    }
}