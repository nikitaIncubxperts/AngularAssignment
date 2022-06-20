import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [CustomerComponent, ListComponent, AddComponent],
  imports: [CommonModule, CustomerRoutingModule],
})
export class CustomerModule { }
