import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentComponent} from './payment/payment.component';
import {SingleServiceComponent} from './single-service/single-service.component';

const routes: Routes = [
  {
    path: 'payments',
    component: PaymentComponent,
    children: [
      {
        path: ':id/:label',
        component: SingleServiceComponent,
      },
    ]

  },
  {
    path: 'timedata',
    component: PaymentComponent,
    children: [
      // {
      //   path: '',
      //   component: DashComponent,
      //   data: {animation: 'detail'}
      // },
      {
        path: ':id/:label',
        component: SingleServiceComponent
      },
    ]

  },
  { path: '',   redirectTo: '/payments', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '/payments'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
