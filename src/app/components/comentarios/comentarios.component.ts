import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
import { ServiceCubos } from 'src/app/services/service.cubos';
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent {
  public idcubo!: number;
  public comentarios!: Array<Comentario>;

  constructor(
    private _servicio: ServiceCubos,
    private _activeRoute: ActivatedRoute
  ) {
    this.idcubo = 0;
  }

  cargarComentarios() {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.idcubo = parseInt(parametros['idCubo']);

      this._servicio.getComentarios(this.idcubo).subscribe((response) => {
        this.comentarios = response;
      });
    });
  }
  ngOnInit(): void {
    this.cargarComentarios();
  }
}
