import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {InicioSesionService} from '../servicios/inicio-sesion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  colapsado = true;

  @HostBinding('class-is-open')
entro=false;
Tipo="E"
  constructor(private iniciosesion:InicioSesionService, private router:Router) { }

  ngOnInit(): void {
    this.iniciosesion.change.subscribe(isOpen =>{
      this.entro=isOpen;
    })
    this.iniciosesion.change2.subscribe(isOpen =>{
      this.Tipo=isOpen;
    })
    this.entro=this.iniciosesion.sesioniniciada();
    this.Tipo=this.iniciosesion.tipousuario();
  }
    
  cerrarsesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('Usuario');
    localStorage.removeItem('Tipo');
    localStorage.removeItem('id');
    alert("¿Estas seguro que quieres cerrar sesión?");
    this.entro = this.iniciosesion.sesioniniciada();
    this.router.navigate(['/inicio']);
  }

  colapsar(){
    if(this.colapsado==true){
      this.colapsado = false;
    }else{
      this.colapsado = true;
    }
  }
}
