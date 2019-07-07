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
  acThreeBarData, allDataCenters
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
  dataCenters = allDataCenters;
  selected;
  barData;
  barAvg = [acOneBarData, acTwoBarData, acThreeBarData, AllBarData];
  doughData;
  stackData;
  stackDataProdArr = [stackDataAcc1, stackDataAcc2, stackDataAcc3, stackDataAll];
  dataSource;
  multiData;

  constructor(private router: Router) {
  }
  ngOnInit() {
    // this.selected = this.monthTotal;
  }
  onAccountSelect(i) {
    this.No = i;
    this.initAllAccServices = this.allServiceList[i];
    // this.optionLabel = this.accountsTotals[this.No].name;
    // this.dataSource.data = this.allServiceList[i];
    // this.barData.data = this.barAvg[i];
    // this.stackData.dataset = this.stackDataProdArr[i];
    // this.router.navigate(['/payments']);
  }
  onDataCenterSelect(i) {
    this.No = i;
    this.initAllAccServices = this.allServiceList[i];
    // this.optionLabel = this.dataCenters[this.No].name;
    // this.dataSource.data = this.allServiceList[i];
    // this.barData.data = this.barAvg[i];
    // this.stackData.dataset = this.stackDataProdArr[i];
    // this.router.navigate(['/payments']);
  }
}
