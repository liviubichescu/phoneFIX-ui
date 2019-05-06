import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import {ClientService} from './shared-services/client-service/client.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthService} from './shared-services/auth-service/auth.service';
import {AuthGuardService} from './components/guards/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {CommonModule} from "@angular/common";
import { ServiceSheetComponent } from './components/service-sheet/service-sheet.component';
import { ServiceSheetListComponent } from './components/service-sheet/service-sheet-list/service-sheet-list.component';
import {ServiceSheetService} from "./components/service-sheet/shared/serviceSheet.service";
import { ClientAddComponent } from './components/clients/client-add/client-add.component';
import { ClientUpdateComponent } from './components/clients/client-update/client-update.component';
import {TokenInterceptor} from "./components/interceptors/token.interceptor";
import { LogoutComponent } from './components/logout/logout.component';
import {LogoutService} from "./shared-services/auth-service/logout.service";
import { ClientDetailsComponent } from './components/clients/client-details/client-details.component';
import { PhonesComponent } from './components/phones/phones.component';
import {PhoneService} from "./shared-services/phone-service/phone.service";
import { PhoneAddComponent } from './components/phones/phone-add/phone-add.component';
import { PhoneListComponent } from './components/phones/phone-list/phone-list.component';
import { PhoneDetailsComponent } from './components/phones/phone-details/phone-details.component';
import { ServiceSheetAddComponent } from './components/service-sheet/service-sheet-add/service-sheet-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientListComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ServiceSheetComponent,
    ServiceSheetListComponent,
    ClientAddComponent,
    ClientUpdateComponent,
    LogoutComponent,
    ClientDetailsComponent,
    PhonesComponent,
    PhoneAddComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    ServiceSheetAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, ClientService, AuthService, AuthGuardService, ServiceSheetService, LogoutService, PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
