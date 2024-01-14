import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GestiondesetudiantsRoutingModule } from './gestiondesetudiants-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';
// component


// Ng Search 
import { NgPipesModule } from 'ngx-pipes';

// Sorting page
import { CustomersComponent } from './customers/customers.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    CustomersComponent

  ],
  imports: [
    CommonModule,
    GestiondesetudiantsRoutingModule,
    SharedModule,
    PaginationModule.forRoot(),
    NgPipesModule,
    BsDatepickerModule,
    ModalModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    SimplebarAngularModule,
    BsDropdownModule.forRoot(),
    StoreModule.forRoot({}),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestiondesetudiantsModule { }
