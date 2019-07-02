import {Component, OnInit} from '@angular/core';
import * as FusionCharts from 'fusioncharts';
import {
  allAccounts,
  accOneServices,
  accTwoServices,
  accThreeServices,
  allAccServicees,
  AllBarData,
  acOneBarData,
  acTwoBarData,
  acThreeBarData
} from '../mock-data/data-general';
import {slideInAnimation} from '../animations';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  No;
  optionLabel = 'All Accounts';
  monthTotal = 11750;
  monthTotalLabel = '$11750';
  isHandset$: Observable<any>;
  accountsTotals = allAccounts;
  allServiceList = [accOneServices, accTwoServices, accThreeServices, allAccServicees];
  initAllAccServices = allAccServicees;
  dataCenters;
  barData;
  barAvg = [acOneBarData, acTwoBarData, acThreeBarData, AllBarData];
  selected;
  dataSource;


  constructor(private router: Router) {
    this.barData = {
      chart: {
        caption: 'Current Month vs Previous vs Next',
        subCaption: '',
        xAxisName: 'month',
        yAxisName: '$ amount',
        numberSuffix: '',
        theme: 'fusion',
        paletteColors: '#00447C,#0076CE, #EE6411,#6EA204,#B7295A,#F2AF00'
      },
      data: AllBarData
    };
  }
  ngOnInit() {
    this.selected = this.monthTotal;
  }
  onAccountSelect(i) {
    this.No = i;
    this.initAllAccServices = this.allServiceList[i];
    this.optionLabel = this.accountsTotals[this.No].name;
    this.dataSource.data = this.allServiceList[i];
    this.barData.data = this.barAvg[i];
    this.stackData.dataset = this.stackDataProdArr[i];
    this.router.navigate(['/payments']);
  }
  onDataCenterSelect(i) {
    this.No = i;
    this.initAllAccServices = this.allServiceList[i];
    this.optionLabel = this.dataCenters[this.No].name;
    this.dataSource.data = this.allServiceList[i];
    this.barData.data = this.barAvg[i];
    this.stackData.dataset = this.stackDataProdArr[i];
    this.router.navigate(['/payments']);
  }
}
