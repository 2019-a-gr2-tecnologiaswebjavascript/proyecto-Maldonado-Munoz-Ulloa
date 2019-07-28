import {Injectable} from "@angular/core";
import {HttpSailsPrincipal} from "./http-sails-principal";
import {Localizacion} from "../../dto/localizacion";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class LocalizacionHttpService extends HttpSailsPrincipal<Localizacion>{

    constructor(private readonly _HttpClient:HttpClient){
        super(_HttpClient,environment.url,'/Localizacion');
    }
}