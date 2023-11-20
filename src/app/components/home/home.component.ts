import { Component,OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public cubos !: Array<Cubo>

  constructor(private _servicio:ServiceCubos){}

  

  ngOnInit(): void {
    this._servicio.getCubos().subscribe((response) => {
      this.cubos=response
    })
  }
} 
