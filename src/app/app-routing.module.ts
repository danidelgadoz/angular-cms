import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { DemoComponent } from './pages/demo/demo.component';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { ClientFormComponent } from './pages/clients/client-form/client-form.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { Error404Component } from './_components/error-404/error-404.component';

import { AuthGuard } from './_guards/auth.guard';
import { IsLoggedIn } from './_guards/is-logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { 
    path: 'login',
    component: LoginComponent,
    // resolve: [IsLoggedIn]
  },
  { 
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home',  component: HomeComponent },
      { path: 'user',  component: UserFormComponent },
      { path: 'clients',  component: ClientsComponent, pathMatch: 'full' },
      { path: 'clients/new',  component: ClientFormComponent },
      { path: 'clients/:id',  component: ClientFormComponent },
      { path: 'news',  component: NewsComponent },
      { path: 'demo',  component: DemoComponent },
    ]
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}