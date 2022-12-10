import { AuthService } from './../../services/auth.service';
import { AlertService } from './../../services/alert.service';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import {
  login,
  loginSuccess,
  loginAdmin,
  loginAdminSuccess,
} from './../actions/auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, mergeMap, catchError, EMPTY } from 'rxjs';
@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((action) =>
        this.authService.login(action.email, action.password).pipe(
          map((res) => loginSuccess({ id: res })),
          catchError((err) => {
            this.alert.showNotificationError(err.error).subscribe();
            return EMPTY;
          })
        )
      )
    )
  );
  loginAdmin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAdmin),
      mergeMap((action) =>
        this.authService.loginAdmin(action.email, action.password).pipe(
          map((res) => loginAdminSuccess({ id: res })),
          catchError((err) => {
            this.alert.showNotificationError(err.error).subscribe();
            return EMPTY;
          })
        )
      )
    )
  );
  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        map((action) => this.router.navigate(['user/' + action.id]))
      ),
    { dispatch: false }
  );
  loginAdminSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginAdminSuccess),
        map(() => this.router.navigate(['admin/main']))
      ),
    { dispatch: false }
  );

  constructor(
    private alert: AlertService,
    private actions$: Actions,
    private router: Router,
    private authService: AuthService
  ) {}
}
