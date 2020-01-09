import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ModelEstado } from '../models/estados.models';
import { ModelMunicipio } from '../models/municipios.models';
import { ModelBolsaFamilia } from '../models/bolsa-familia.models';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public listaEstados: ModelEstado[] = [];
  public listaMunicipios: ModelMunicipio[] = [];
  public listaBolsaFamilia: ModelBolsaFamilia[] = [];

  public graphLoader = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getEstados().subscribe((resp: ModelEstado[]) => this.listaEstados = resp);
  }

  getMunicipios(id: string) {
    this.apiService.getMunicipios(id).subscribe((resp: ModelMunicipio[]) => {
      this.listaMunicipios = resp;
    });
  }

  getBolsaFamilia(id: string) {
    this.graphLoader = true;
    const date = String(new Date().getFullYear() - 1) + String(('0' + (new Date().getMonth() + 1)).slice(-2));
    this.apiService.getBolsaFamilia(id, date).subscribe((resp: ModelBolsaFamilia[]) => {
      this.listaBolsaFamilia = resp;
      this.graphLoader = false;
    });
  }

}
