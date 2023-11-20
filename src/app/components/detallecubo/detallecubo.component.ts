import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Comentario } from 'src/app/models/comentario';

@Component({
  selector: 'app-detallecubo',
  templateUrl: './detallecubo.component.html',
  styleUrls: ['./detallecubo.component.css'],
})
export class DetallecuboComponent implements OnInit {
  public cubo!: Cubo;
  public comentarios!: Array<Comentario>;
  public idcubo!: number;

  constructor(
    private _servicio: ServiceCubos,
    private _activeRoute: ActivatedRoute
  ) {
    this.idcubo = 0;
  }

  cargarCubo() {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.idcubo = parseInt(parametros['idcubo']);

      this._servicio.getCuboId(this.idcubo).subscribe((response) => {
        this.cubo = response;
        console.log(this.cubo);
      });
    });
  }
  cargarComentarios() {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.idcubo = parseInt(parametros['idcubo']);

      this._servicio.getComentarios(this.idcubo).subscribe((response) => {
        this.comentarios = response;
        console.log(this.comentarios);
      });
    });
  }

  ngOnInit(): void {
    this.cargarComentarios();
    this.cargarCubo();
  }
}
