import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {
  url = "http://localhost:3000/usuario/iniciocliente";
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() change2: EventEmitter<String> = new EventEmitter();
  @Output() change3: EventEmitter<String> = new EventEmitter();

  
  constructor(private http: HttpClient) { }
  //Manda los datos a la ruta de inicio de sesion de express
  login(usuario){
    return this.http.post<any>(this.url,usuario);
  }

  sesioniniciada(){
    this.change.emit(!!localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }

  tipousuario(){
    this.change2.emit(localStorage.getItem('tipo'));
    return localStorage.getItem('tipo');
  }
idusuario(){
  this.change3.emit(localStorage.getItem('id'));
  return localStorage.getItem('id');
}

}
