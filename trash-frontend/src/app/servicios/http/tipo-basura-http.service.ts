import {Injectable} from "@angular/core";
import {HttpSailsPrincipal} from "./http-sails-principal";
import {TipoBasura} from "../../dto/tipo-basura";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class TipoBasuraHttpService extends HttpSailsPrincipal<TipoBasura>{

    constructor(private readonly _HttpClient:HttpClient){
        super(_HttpClient,environment.url,'/TipoBasura');
    }


}