import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Authguard } from './authGuard/auth.guard';
import { AddBrandComponent } from './brand/add-brand/add-brand.component';
import { EdituserComponent } from './edituser/edituser.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UDashComponent } from './user/u-dash/u-dash.component';
import { MyAdsComponent } from './user/my-ads/my-ads.component';
import { PostAdsComponent } from './user/post-ads/post-ads.component';
import { PostComponent } from './home/post/post.component';
import { EditPostComponent } from './user/edit-post/edit-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'post/:id', component: PostComponent }
    ]
  },
  {
    path: 'user', component: UserComponent, canActivate: [Authguard],
    children: [
      { path: 'u_dash', component: UDashComponent },
      { path: 'myads', component: MyAdsComponent },
      { path: 'postads', component: PostAdsComponent },
      { path: 'editpost/:_id', component: EditPostComponent }
    ]
  },

  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'viewuser', component: ViewuserComponent },
  { path: 'edituser/:id', component: EdituserComponent },
  { path: 'addbrand', component: AddBrandComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
