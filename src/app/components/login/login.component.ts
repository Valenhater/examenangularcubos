import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Autorizacion } from 'src/app/models/autorizacion';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('cajauser') cajaUserRef!: ElementRef;
  @ViewChild('cajapassword') cajaPassowrdRef!: ElementRef;
  public autorizacion!: Autorizacion;
  constructor(private _serviceAuth: ServiceCubos,private _router: Router) {}
  login() {
    var usuario = this.cajaUserRef.nativeElement.value;
    var pass = this.cajaPassowrdRef.nativeElement.value;

    this.autorizacion = new Autorizacion(usuario, pass);
    this._serviceAuth.autorizar(this.autorizacion).subscribe((response) => {
      var authToken = response.response;
      environment.token = authToken;
      console.log(response.response);
      this._router.navigate(['/perfil']);
    });

  }
}