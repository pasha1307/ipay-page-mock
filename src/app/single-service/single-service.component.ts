import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PRODUCT_DATA_1, PRODUCT_DATA_2, PRODUCT_DATA_3, PRODUCT_DATA_4, PRODUCT_DATA_5} from '../mock-data/data-mock-table';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material';
import {AccountsService} from '../services/accounts.service';

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.scss']
})
export class SingleServiceComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'about', 'dc1', 'dc2', 'dc3', 'total'];
  prodId: Observable<string>;
  prodName: Observable<string>;
  currDate = new Date();
  prodTitle;
  productData: any[] = [PRODUCT_DATA_1, PRODUCT_DATA_2, PRODUCT_DATA_3, PRODUCT_DATA_4, PRODUCT_DATA_5];
  dataSource;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const myid: any = id as any - 1;
      this.prodTitle = params.get('label');
      this.dataSource = new MatTableDataSource(this.productData[myid]);
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
