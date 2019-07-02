import { Component, OnInit } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
const dataUrl =
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/data.json';
const schemaUrl =
  'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/fusiontime-beta-release/charts-resources/fusiontime/online-sales-single-series/schema.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource: any;
  type: string;
  width: string;
  height: string;

  constructor() {
    this.type = 'timeseries';
    this.width = '400';
    this.height = '400';
    this.dataSource = {
      data: null,
      yAxis: {
        plot: [{ value: 'Sales' }]
      },
      caption: {
        text: 'Online Sales of a SuperStore in the US'
      }
    };
    // this.fetchData();
  }

  ngOnInit() {
  }
  fetchData() {
    // let jsonify = res => res.json();
    // let dataFetch = fetch(dataUrl).then(jsonify);
    // let schemaFetch = fetch(schemaUrl).then(jsonify);
    // Promise.all([dataFetch, schemaFetch]).then(res => {
    //   let data = res[0];
    //   let schema = res[1];
    //   let fusionTable = new FusionCharts.DataStore().createDataTable(
    //     data,
    //     schema
    //   ); // Instance of DataTable to be passed as data in dataSource
    //   this.dataSource.data = fusionTable;
    // });
  }
}
