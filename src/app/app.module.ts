import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProvider } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';

import { ServiceCubos } from './services/service.cubos';
import { DetallecuboComponent } from './components/detallecubo/detallecubo.component';
import { LoginComponent } from './components/login/login.component';
import { PerfiluserComponent } from './components/perfiluser/perfiluser.component';
import { ComprasuserComponent } from './components/comprasuser/comprasuser.component';
import { CrearusuarioComponent } from './components/crearusuario/crearusuario.component';
import { ComprarComponent } from './components/comprar/comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CubosmarcaComponent,
    ComentariosComponent,
    DetallecuboComponent,
    LoginComponent,
    PerfiluserComponent,
    ComprasuserComponent,
    CrearusuarioComponent,
    ComprarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProvider,ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }
