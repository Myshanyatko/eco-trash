import { UserEffects } from './store/effects/user.effects';
import { environment } from './../environments/environment.prod';
import { AuthEffects } from './store/effects/auth.effects';
import { appReducers } from './store/reducers/app.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiButtonModule,
  TuiNotificationModule,TuiTextfieldControllerModule, TuiSvgModule
} from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';
import {
  TuiInputModule,
  TuiAvatarModule,
  TuiAccordionModule,
  TuiInputCountModule
} from '@taiga-ui/kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { AuthAdminComponent } from './components/auth/auth-admin/auth-admin.component';
import { MainComponent } from './components/main/main/main.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './components/user/user/user.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MainAdminComponent } from './components/main/main-admin/main-admin.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { AdminUserComponent } from './components/user/admin-user/admin-user.component';
import { TrashComponent } from './components/trash/trash/trash.component';
import { TrashListComponent } from './components/trash/trash-list/trash-list.component';
import { TrashEffects } from './store/effects/trash.effects';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthAdminComponent,
    MainComponent,
    UserComponent,
    MainAdminComponent,
    UserListComponent,
    AdminUserComponent,
    TrashComponent,
    TrashListComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiInputModule,
    TuiDialogModule,
    TuiButtonModule,
    TuiAlertModule,
    TuiNotificationModule,
    HttpClientModule,
    TuiAvatarModule,
    TuiAccordionModule,
    TuiInputCountModule,
    TuiTextfieldControllerModule,
    TuiSvgModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffects, UserEffects, TrashEffects]),
    TuiLetModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
