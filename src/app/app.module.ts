// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// External plugins
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CKEditorModule } from 'ng2-ckeditor';

// Custom settings
import { AppRoutingModule } from './app-routing.module';
import { DemoMaterialModule } from './demo-material-module';
import { AuthGuard, IsLoggedIn } from './guards/index';
import { AuthInterceptor, ResponseInterceptor } from './interceptors/index';
import { AuthenticationService, ClientService } from './services/index';

// App pages
import { AppComponent } from './app.component';
import { LoginComponent } from './layouts/login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { ToolbarComponent } from './layouts/dashboard/toolbar/toolbar.component';
import { SidenavComponent } from './layouts/dashboard/sidenav/sidenav.component';
import { Error404Component } from './layouts/error-404/error-404.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { DemoComponent } from './pages/demo/demo.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { ClientFormComponent } from './pages/clients/client-form/client-form.component';
import { ClientsComponent } from './pages/clients/clients.component';

// App components and directives
import { ContentComponent } from './components/content/content.component';
import { InputDemoComponent } from './components/input-demo/input-demo.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { DndDirective } from './components/file-input/dnd.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Error404Component,
    ToolbarComponent,
    SidenavComponent,
    HomeComponent,
    NewsComponent,
    DemoComponent,
    UserFormComponent,
    ClientFormComponent,
    ClientsComponent,
    ContentComponent,
    InputDemoComponent,
    FileInputComponent,
    DndDirective
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
    // { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
    AuthGuard,
    IsLoggedIn,
    AuthenticationService,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
