import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  //load childrens in innner components
  // {
  //   path:'admin/customer', component: 
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
