import { Injectable } from '@angular/core';
import {
  accOneServices,
  accThreeServices,
  accTwoServices,
  acOneBarData, acThreeBarData,
  acTwoBarData,
  allAccounts,
  allAccServicees, AllBarData, allDataCenters
} from '../mock-data/data-general';
import {stackDataAcc1, stackDataAcc2, stackDataAcc3, stackDataAll} from '../mock-data/data-stack-calendar';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  optionLabel = 'All Accounts';
  accountsTotals = allAccounts;
  allServiceList = [accOneServices, accTwoServices, accThreeServices, allAccServicees];
  initAllAccServices = allAccServicees;
  dataSource;
  barData = [acOneBarData, acTwoBarData, acThreeBarData, AllBarData];
  stackData = [stackDataAcc1, stackDataAcc2, stackDataAcc3, stackDataAll];
  constructor() { }
  getSum(i) {
    return this.accountsTotals[i]
  }
  getAccount(i) {
    return this.allServiceList[i];
  }
 getBarData(i) {
    return this.barData[i];
 }
 getStackData(i) {
    return this.stackData[i];
 }
 getDataCenters(i) {
    return allDataCenters[i];
 }
}
