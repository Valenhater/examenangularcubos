import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { ServiceCubos } from 'src/app/services/service.cubos';
@Component({
  selector: 'app-cubosmarca',
  templateUrl: './cubosmarca.component.html',
  styleUrls: ['./cubosmarca.component.css'],
})
export class CubosmarcaComponent implements OnInit {
  public nmarca!: string;
  public cubos!: Array<Cubo>;

  constructor(
    private _servicio: ServiceCubos,
    private _activeRoute: ActivatedRoute
  ) {
    this.nmarca = '';
  }

  cargarCubos() {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.nmarca = parametros['marcanombre'];

      this._servicio.getCuboMarca(this.nmarca).subscribe((response) => {
        this.cubos = response;
      });
    });
  }
  ngOnInit(): void {
    this.cargarCubos();
  }
}
