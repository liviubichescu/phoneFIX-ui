import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {ServiceSheetComponent} from "./components/service-sheet/service-sheet.component";
import {ClientsComponent} from "./components/clients/clients.component";
import {AuthGuardService} from "./components/guards/auth-guard.service";
import {LogoutComponent} from "./components/logout/logout.component";
import {ClientUpdateComponent} from "./components/clients/client-update/client-update.component";
import {PhonesComponent} from "./components/phones/phones.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', canActivate: [AuthGuardService], component: LogoutComponent},
  {path: 'clients', canActivate: [AuthGuardService], component: ClientsComponent},

  // {path: 'clients/:id', canActivate: [AuthGuardService], component: ClientsComponent,
  //   children: [
  //     {
  //       path: 'detail',
  //       component: ClientUpdateComponent
  //     },
  //     {
  //       path: 'client/add',
  //       component: ClientAddComponent
  //     },
  //     {
  //       path: 'client/list',
  //       component: ClientListComponent
  //     }
  //   ]
  // },

  {path: 'client/detail/:id', component: ClientUpdateComponent},
  {path: 'home', component: HomeComponent},
  {path: 'service', canActivate: [AuthGuardService], component: ServiceSheetComponent},
  {path: 'phones', canActivate: [AuthGuardService], component: PhonesComponent},


];

@NgModule({

  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
