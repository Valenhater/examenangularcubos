import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

import { Cubo } from '../models/cubo';
import { Autorizacion } from '../models/autorizacion';
import { Usuario } from '../models/usuario';
@Injectable()
export class ServiceCubos {
  constructor(private _http: HttpClient) {}

  getCubos(): Observable<any> {
    var request = 'api/cubos';
    var url = environment.apiCubos + request;

    return this._http.get(url);
  }
  getMarcas(): Observable<any> {
    var request = 'api/Cubos/Marcas';
    var url = environment.apiCubos + request;

    return this._http.get(url);
  }
  getCuboMarca(nmarca: string): Observable<any> {
    var request = '/api/Cubos/CubosMarca/' + nmarca;
    var url = environment.apiCubos + request;

    return this._http.get(url);
  }
  getComentarios(idcubo: number): Observable<any> {
    var request = '/api/ComentariosCubo/GetComentariosCubo/' + idcubo;
    var url = environment.apiCubos + request;

    return this._http.get(url);
  }
  getCuboId(idcubo:number): Observable<any> {
    var request = 'api/cubos/' +idcubo;
    var url = environment.apiCubos + request;

    return this._http.get(url);
  }
  autorizar(autorizar: Autorizacion): Observable<any> {
    var json = JSON.stringify(autorizar);
    var header = new HttpHeaders();
    header = header.set('content-type', 'application/json');
    var request = 'api/Manage/Login';
    var url = environment.apiCubos + request;

    return this._http.post(url, json, { headers: header });
  }

  getUsuario(): Observable<any> {
    var header = new HttpHeaders();
    header = header.set('Authorization', 'bearer '+environment.token);
    var request = 'api/manage/perfilusuario';
    var url = environment.apiCubos + request;
    return this._http.get(url, { headers: header });
  }
  getCompras(): Observable<any> {
    var header = new HttpHeaders();
    header = header.set('Authorization', 'bearer '+environment.token);
    var request = 'api/Compra/ComprasUsuario';
    var url = environment.apiCubos + request;
    return this._http.get(url, { headers: header });
  }
  nuevoUsuario(usuario: Usuario): Observable<any> {
    //Debemos convertir el objeto class departamento a json
    var json = JSON.stringify(usuario);
    //Vamos a enviar un objeto json por lo que debemos indicar en la peticion el formato de dicho objeto. lo realizamos con headers
    var header = new HttpHeaders();
    header = header.set('content-type', 'application/json').set('Authorization', 'bearer '+environment.token);
    var request = 'api/Manage/RegistroUsuario';
    var url = environment.apiCubos + request;
    return this._http.post(url, json, { headers: header }, );
}

}
