import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MutantsComponent } from './mutants/mutants.component';
import { SafeURLPipe } from './safe-url.pipe';
import { MutantDetailComponent } from './mutant-detail/mutant-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { VilliansComponent } from './villians/villians.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
 
@NgModule({
  declarations: [
    AppComponent,
    MutantsComponent,
    SafeURLPipe,
    MutantDetailComponent,
    MessagesComponent,
    VilliansComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
