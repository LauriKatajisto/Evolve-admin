import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ListworkoutsComponent } from './listworkouts/listworkouts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListworkoutsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
