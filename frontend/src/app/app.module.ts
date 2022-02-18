import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SalesRoutingModule } from './modules/sales/sales-routing.module';
import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { ManufactureRoutingModule } from './modules/manufacture/manufacture-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    SalesRoutingModule,
    AdminRoutingModule,
    ManufactureRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
