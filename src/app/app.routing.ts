import { HomeComponent } from './components/home/home.component';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { DetallecuboComponent } from './components/detallecubo/detallecubo.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { PerfiluserComponent } from './components/perfiluser/perfiluser.component';
import { ComprasuserComponent } from './components/comprasuser/comprasuser.component';
import { CrearusuarioComponent } from './components/crearusuario/crearusuario.component';
import { ComprarComponent } from './components/comprar/comprar.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detallemarca/:marcanombre', component: CubosmarcaComponent },
    { path: 'comentario/:idCubo', component: ComentariosComponent },
    { path: 'detalle/:idcubo', component: DetallecuboComponent },
    { path: 'login', component: LoginComponent },
    { path: 'perfil', component: PerfiluserComponent },
    { path: 'compras', component: ComprasuserComponent },
    { path: 'nuevo', component: CrearusuarioComponent },
    { path: 'comprar', component: ComprarComponent },
    
   
  ];
  
  export const appRoutingProvider: any[] = [];
  export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);