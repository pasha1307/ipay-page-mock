import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {allAccServicees} from '../mock-data/data-general';
import {stackCalendarCategories, stackDataAcc1, stackDataAcc2, stackDataAcc3, stackDataAll} from '../mock-data/data-stack-calendar';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountsService} from '../services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  totalSum;
  accountLabel;
  barsData;
  isAccount = true;
  isCenter = false;
  monthTotalLabel = '$11750';
  isHandset$: Observable<any>;
  initAllAccServices = allAccServicees;
  dataCenters;
  barData;
  doughData;
  stackData;
  test;
  constructor(private router: Router,
              private route: ActivatedRoute,
              public accService: AccountsService
              ) {
    // this.totalSum = this.accService.getSum(3).total;
    // this.accountLabel = this.accService.getSum(3).name;
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
      data: this.barsData
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
      dataset: this.stackData
    };
    // this.stackData = {
    //   chart: {
    //     caption: 'Monthly Cost',
    //     subcaption: ' by service',
    //     numbersuffix: '',
    //     showsum: '1',
    //     plottooltext:
    //       '$label <b>$dataValue</b> a month $seriesName',
    //     theme: 'fusion',
    //     drawcrossline: '1',
    //     // borderColor: '#6EA204',
    //     // plotGradientColor: '#B7295A',
    //     // canvasBgColor: '#00447C',
    //     // usePlotGradientColor: 0,
    //     // showcanvasborder: 0,
    //     paletteColors: '#00447C,#0076CE, #EE6411,#41B6E6,#B7295A,#F2AF00'
    //   },
    //   categories: stackCalendarCategories,
    //   dataset: this.stackData
    // };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('acc');
      const center = params.get('datacenter');
      if (id) {
        this.totalSum = this.accService.getSum(id).total;
        this.accountLabel = this.accService.getSum(id).name;
        this.getCartData(id);
        this.isCenter = false;
        this.isAccount = true;
        if (center.includes('datacenter')) {
          this.isCenter = true;
          this.isAccount = false;
          this.accountLabel = this.accService.getDataCenters(id).name;
        }
      } else {
        this.totalSum = this.accService.getSum(3).total;
        this.accountLabel = this.accService.getSum(3).name;
        this.getCartData(3);
      }
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
        data: this.barsData
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
        dataset: this.stackData
      };
    });
  }
  getCartData(id) {
    this.test = this.accService.getAccount(id);
    this.initAllAccServices = this.accService.getAccount(id);
    this.barsData = this.accService.getBarData(id);
    this.stackData = this.accService.getStackData(id);
  }
}
