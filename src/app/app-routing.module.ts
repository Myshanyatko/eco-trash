import { UserComponent } from './components/user/user/user.component';
import { MainComponent } from './components/main/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminComponent } from './components/auth/auth-admin/auth-admin.component';
import { AuthComponent } from './components/auth/auth/auth.component';

const routes: Routes = [
  { path: 'login-user', component: AuthComponent },
  { path: 'login-admin', component: AuthAdminComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
