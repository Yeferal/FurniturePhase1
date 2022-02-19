import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManufactureRoutingModule } from './manufacture-routing.module';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { AppSearchComponent } from './components/app-search/app-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListFurnitureComponent } from './pages/list-furniture/list-furniture.component';

@NgModule({
  declarations: [
    ListCategoryComponent,
    AppSearchComponent,
    ListFurnitureComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ManufactureRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManufactureModule { }
