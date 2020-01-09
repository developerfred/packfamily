import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEstados(): Observable<any>  {
    return this.http.get<any>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }

  getMunicipios(ufId: string): Observable<any>  {
    return this.http.get<any>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufId}/municipios`);
  }

  getBolsaFamilia(id: string, data: string): Observable<any> {
    return this.http.
    get<any>(`http://localhost:4200/api/api-de-dados/bolsa-familia-por-municipio?mesAno=${data}&codigoIbge=${id}&pagina=1`);
  }
}
