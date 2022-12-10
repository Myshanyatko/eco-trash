import { AdminUserComponent } from './components/user/admin-user/admin-user.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserComponent } from './components/user/user/user.component';
import { MainComponent } from './components/main/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminComponent } from './components/auth/auth-admin/auth-admin.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { MainAdminComponent } from './components/main/main-admin/main-admin.component';

const routes: Routes = [
  { path: 'login-user', component: AuthComponent },
  { path: 'login-admin', component: AuthAdminComponent },
  { path: 'user/:id', component: UserComponent },
  { path: '', component: MainComponent },
  { path: 'admin/main', component: MainAdminComponent },
  { path: 'admin/user-list/filter/:filter', component: UserListComponent },
  { path: 'admin/user/:id', component: AdminUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
