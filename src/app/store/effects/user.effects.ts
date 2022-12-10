import { UserService } from './../../services/user.service';
import { getUser, setUser, getStory, setStory } from './../actions/user.actions';
import { AuthService } from './../../services/auth.service';
import { AlertService } from './../../services/alert.service';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { login, loginSuccess } from './../actions/auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, mergeMap, catchError, EMPTY } from 'rxjs';
@Injectable()
export class UserEffects {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      mergeMap((action) =>
        this.user.getUser(action.id).pipe(
          map((res) => setUser({ user: res })),
          catchError((err) => {
            this.alert.showNotificationError(err.error).subscribe();
            return EMPTY;
          })
        )
      )
    )
  );
  getStory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStory),
      mergeMap((action) =>
        this.user.getStory(action.id).pipe(
          map((res) => setStory({ story: res })),
          catchError((err) => {
            this.alert.showNotificationError(err.error).subscribe();
            return EMPTY;
          })
        )
      )
    )
  );
  

  constructor(
    private alert: AlertService,
    private actions$: Actions,
    private router: Router,
    private user: UserService
  ) {}
}
