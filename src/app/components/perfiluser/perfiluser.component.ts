import { Component,OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-perfiluser',
  templateUrl: './perfiluser.component.html',
  styleUrls: ['./perfiluser.component.css']
})
export class PerfiluserComponent {
  public usuario !: Usuario;

  constructor(private _servicio:ServiceCubos){}

  ngOnInit(): void {
    this._servicio.getUsuario().subscribe((response) => {
      this.usuario=response
    })
  }
}




