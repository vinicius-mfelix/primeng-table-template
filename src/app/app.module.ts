import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArquivoService } from './arquivo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    PaginatorModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    ArquivoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
