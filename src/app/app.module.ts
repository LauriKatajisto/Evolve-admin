import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

// app
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ListworkoutsComponent } from './listworkouts/listworkouts.component';
import { AddworkoutComponent } from './addworkout/addworkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListworkoutsComponent,
    AddworkoutComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
