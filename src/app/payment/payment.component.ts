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
import {stackProdCategories,
  stackDataAccount1,
  stackDataAccount2,
  stackDataAccount3,
  stackDataAccountAll
} from '../mock-data/data-stack';
import {slideInAnimation} from '../animations';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {stackCalendarCategories, stackDataAcc1, stackDataAcc2, stackDataAcc3, stackDataAll} from '../mock-data/data-stack-calendar';

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
  selected;
  barData;
  barAvg = [acOneBarData, acTwoBarData, acThreeBarData, AllBarData];
  doughData;
  stackData;
  stackDataProdArr = [stackDataAcc1, stackDataAcc2, stackDataAcc3, stackDataAll];
  dataSource;
  multiData;

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
    this.stackData = {
      chart: {
        caption: 'Monthly Cost',
        subcaption: ' by service',
        numbersuffix: '',
        showsum: '1',
        plottooltext:
          '$label <b>$dataValue</b> a month $seriesName',
        theme: 'fusion',
        drawcrossline: '1',
        // borderColor: '#6EA204',
        // plotGradientColor: '#B7295A',
        // canvasBgColor: '#00447C',
        // usePlotGradientColor: 0,
        // showcanvasborder: 0,
        paletteColors: '#00447C,#0076CE, #EE6411,#41B6E6,#B7295A,#F2AF00'
      },
      categories: stackCalendarCategories,
      dataset: stackDataAll
    };
    this.doughData = {
      chart: {
        caption: 'Relative Cost of Product',
        subcaption: 'for an account',
        showpercentvalues: '1',
        defaultcenterlabel: this.monthTotalLabel,
        aligncaptionwithcanvas: '1',
        captionpadding: '0',
        decimals: '0',
        palette: '1',
        plottooltext:
          '<b>$percentValue</b> of services <b>$label</b>',
        centerlabel: '$label - $$value',
        theme: 'fusion',
        plotHighlightEffect: 0,
        use3DLighting: 0,
        paletteColors: '#00447C,#0076CE, #EE6411,#6EA204,#B7295A,#F2AF00'
      },
      data: this.initAllAccServices
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
