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

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate: [Authguard] },
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
