//Librerias
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

//Componentes
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { MenuComponent } from './menu/menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ClienteCitaComponent } from './cliente-cita/cliente-cita.component';
import { MiscitasComponent } from './miscitas/miscitas.component';

//Servicios
import { InicioSesionService } from './servicios/inicio-sesion.service';
import { VehiculosService } from './servicios/vehiculos.service';
import { ClienteCitaService } from './servicios/cliente-cita.service';
import { MiscitasService } from './servicios/miscitas.service';

@NgModule({

  declarations: [
    AppComponent,
    InicioSesionComponent,
    MenuComponent,
    VehiculoComponent,
    ClienteCitaComponent,
    MiscitasComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],

  providers: [
    InicioSesionService,
    VehiculosService,
    ClienteCitaService,
    MiscitasService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
