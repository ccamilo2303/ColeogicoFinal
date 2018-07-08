import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent { 

  public email:string = "asd";
  public password:string = "";
  public identificacion:string = "";

  constructor(private apiService : ApiService){
console.log('constructor');

  }


  loginUsuario(){
    console.log("INICIÓ", {email:this.email, password:this.password});


    this.apiService.post('login', {email:this.email, password:this.password}).subscribe( r =>{
      console.log("TERMINO");
      console.log(r)
    })
  }


}
