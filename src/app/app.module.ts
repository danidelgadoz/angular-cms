import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CKEditorModule } from 'ng2-ckeditor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule }     from './app-routing.module';
import { AuthGuard, IsLoggedIn } from './_guards/index';
import { AuthInterceptor, responseInterceptor } from './_interceptors/index';
import { AuthenticationService, ClientService } from './_services/index';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './dashboard/toolbar/toolbar.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { DemoComponent } from './pages/demo/demo.component';
import { LoginComponent } from './login/login.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { ClientFormComponent } from './pages/clients/client-form/client-form.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { Error404Component } from './_components/error-404/error-404.component';
import { DemoMaterialModule } from './demo-material-module';
import { ContentComponent } from './_components/content/content.component';
import { InputDemoComponent } from './_components/input-demo/input-demo.component';
import { FileInputComponent } from './_components/file-input/file-input.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    SidenavComponent,
    HomeComponent,
    NewsComponent,
    DemoComponent,
    LoginComponent,
    UserFormComponent,
    ClientFormComponent,
    ClientsComponent,
    Error404Component,
    ContentComponent,    
    InputDemoComponent, FileInputComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgxDatatableModule,
    CKEditorModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: responseInterceptor, multi: true },
    AuthGuard,
    IsLoggedIn,
    AuthenticationService,
    ClientService      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
