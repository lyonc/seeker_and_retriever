import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ApiInterceptor } from './shared/api.interceptor';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { AboutComponent } from './about/about.component';
import { LabComponent } from './lab/lab.component';
import { FetchDataComponent } from './lab/fetch-data/fetch-data.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    MessagesComponent,
    JobsComponent,
    JobDetailComponent,
    DashboardComponent,
    AboutComponent,
    LabComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'jobs', component: JobsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'chat', component: MessagesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'lab', component: LabComponent },
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
