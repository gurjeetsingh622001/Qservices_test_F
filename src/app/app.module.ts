import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './user/nav/nav.component';
import { UDashComponent } from './user/u-dash/u-dash.component';
import { MyAdsComponent } from './user/my-ads/my-ads.component';
import { PostAdsComponent } from './user/post-ads/post-ads.component';
import { PostComponent } from './home/post/post.component';
import { EditPostComponent } from './user/edit-post/edit-post.component';
import { ChartComponent } from './Charts/chart/chart.component';
import { ChartModule } from 'primeng/chart';
import { QuestionComponent } from './Charts/question/question.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    // WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    // ViewuserComponent,
    // EdituserComponent,
    // AddBrandComponent,
    // ViewBrandComponent,
    // ProductsComponent,
    // CartComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    UserComponent,
    NavComponent,
    UDashComponent,
    MyAdsComponent,
    PostAdsComponent,
    PostComponent,
    EditPostComponent,
    ChartComponent,
    QuestionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
