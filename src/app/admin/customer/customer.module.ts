import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { InnerHeaderComponent } from './inner-header/inner-header.component';
import { InnerMainComponent } from './inner-main/inner-main.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [InnerHeaderComponent, InnerMainComponent, CustomerComponent],
  imports: [CommonModule, CustomerRoutingModule],
})
export class CustomerModule {}
