import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';



@Injectable()
export class ColeogicoService{
    

    private rutaBase: string = 'http://localhost:8080/coleogicoBack/api/'
    constructor(private http:HttpClient) {}
    
    post(accion:string, parametros){
        return this.http.post(this.rutaBase+accion, parametros);
    }

}