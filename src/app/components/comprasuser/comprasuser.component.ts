import { Component } from '@angular/core';
import { Compras } from 'src/app/models/compras';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-comprasuser',
  templateUrl: './comprasuser.component.html',
  styleUrls: ['./comprasuser.component.css'],
})
export class ComprasuserComponent {
  public compras!: Array<Compras>;

  constructor(private _servicio: ServiceCubos) {}

  ngOnInit(): void {
    this._servicio.getCompras().subscribe((response) => {
      this.compras = response;
    });
  }
}
