import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ModelBolsaFamilia } from '../models/bolsa-familia.models';

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() bolsaFamilia: ModelBolsaFamilia;

  constructor() { }

  ngOnInit() {
    console.log('bolsa', this.bolsaFamilia);
    const options: any = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Quantidade de beneficiários e valor total destinado ao Bolsa Família nos últimos 12 meses.'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Quantidade'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 10,
          dataLabels: {
            enabled: true,
            format: '{point.y: f}'
          }
        }
      },
      series: [
        {
          colorByPoint: true,
          data: [
            {
              name: 'Valor Total',
              y: this.bolsaFamilia.valor,
              drilldown: 'Valor Total',
            },
            {
              name: 'Total de benefíciados',
              y: this.bolsaFamilia.quantidadeBeneficiados,
              drilldown: 'Total de benefíciados'
            }
          ]
        },
      ]
    };

    Highcharts.chart('container', options);
  }

}
