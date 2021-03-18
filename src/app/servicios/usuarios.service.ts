import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URL = "https://jsonplaceholder.typicode.com/users"
  
  usuarios: any = [];
  
  constructor(private http: HttpClient) { }

  getUsuarios (){
    return this.http.get(this.API_URL);
  }
}
