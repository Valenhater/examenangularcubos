import { Component,ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearusuarioComponent {
  public usuario!: Usuario

  @ViewChild("cajauser") cajaUsuarioRef!: ElementRef;
  @ViewChild("cajaemail") cajaEmailRef!: ElementRef;
  @ViewChild("cajapassword") cajaPassRef!: ElementRef;

  constructor(private _service: ServiceCubos, private _router: Router) { }

  crearUsuario(): void {
    var idusu = 0;
    var nom = this.cajaUsuarioRef.nativeElement.value
    var correo = this.cajaEmailRef.nativeElement.value
    var pass = this.cajaPassRef.nativeElement.value
    
    var newUser = new Usuario(idusu,nom,correo,pass)
    this._service.nuevoUsuario(newUser).subscribe(response => {
      this._router.navigate(["/login"]); //Con este comando volvemos a casita
    })

  }
}
