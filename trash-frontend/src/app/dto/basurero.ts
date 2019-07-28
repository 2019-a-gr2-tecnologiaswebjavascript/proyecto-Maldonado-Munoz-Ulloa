export interface Basurero {
    createdAt?: number;
    updatedAt?: number;
    id?: number;
    tagBasurero:string;
    maxLlenoBasurero:number;
    pisoBasurero:number;
    ubicacionBasurero:string;
    fkTipoBasura:any;
    fkEstadoBasurero:any;
    fkLocalizacion:any;
}