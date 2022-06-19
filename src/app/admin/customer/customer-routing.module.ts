import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { InnerHeaderComponent } from './inner-header/inner-header.component';
import { InnerMainComponent } from './inner-main/inner-main.component';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      { path: '', component: InnerHeaderComponent },
      {
        path: '',
        component: InnerMainComponent,
      },
    ],
  },

  //load childrens in innner components
  // {
  //   path:'admin/customer', component:
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
