import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Authguard } from './authGuard/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UDashComponent } from './user/u-dash/u-dash.component';
import { MyAdsComponent } from './user/my-ads/my-ads.component';
import { PostAdsComponent } from './user/post-ads/post-ads.component';
import { PostComponent } from './home/post/post.component';
import { EditPostComponent } from './user/edit-post/edit-post.component';
import { ChartComponent } from './Charts/chart/chart.component';
import { QuestionComponent } from './Charts/question/question.component';

const routes: Routes = [
  { path: '', redirectTo: 'chart', pathMatch: 'full' },
  // { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // first page routes
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'post/:id', component: PostComponent }
    ]
  },

    // routes after login

  {
    path: 'user', component: UserComponent, canActivate: [Authguard],
    children: [
      { path: 'u_dash', component: UDashComponent },
      { path: 'myads', component: MyAdsComponent },
      { path: 'postads', component: PostAdsComponent },
      { path: 'editpost/:_id', component: EditPostComponent }
    ]
  },
  {path :'chart' , component :ChartComponent},
  {path:'question', component : QuestionComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
