import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './admin/customer/customer.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';

@NgModule({
  declarations: [AppComponent, FileNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, AdminModule, CustomerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
