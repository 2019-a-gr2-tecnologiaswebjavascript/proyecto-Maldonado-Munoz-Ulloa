import {Injectable} from "@angular/core";
import {HttpSailsPrincipal} from "./http-sails-principal";
import {EstadoBasurero} from "../../dto/estado-basurero";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class EstadoBasureroHttpService extends HttpSailsPrincipal<EstadoBasurero>{

    constructor(private readonly _HttpClient:HttpClient){
        super(_HttpClient,environment.url,'/EstadoBasurero');
    }

}{}