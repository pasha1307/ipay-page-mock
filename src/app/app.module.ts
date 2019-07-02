import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule, MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule, MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme, TimeSeries);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatTableModule,
    FusionChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
