
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductFilterPipe
  ],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), HttpClientModule, FormsModule],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
