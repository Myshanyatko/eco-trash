import {
  getAble,
  getStoryTrash,
  getTrash,
  getTrashs,
  setAble,
  setStoryTrash,
  setTrash,
  setTrashs,
} from './../actions/trash.actions';
import { AlertService } from './../../services/alert.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, EMPTY } from 'rxjs';
import { TrashService } from 'src/app/services/trash.service';
@Injectable()
export class TrashEffects {
  getTrash$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTrash),
      mergeMap((action) =>
        this.trashService.getTrash(action.id).pipe(
          map((res) => setTrash({ trash: res })),
          catchError((err) => {
            this.alert.showNotificationError(err.error).subscribe();
            return EMPTY;
          })
        )
      )
    )
  );
  getAbled$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAble),
      mergeMap((action) =>
        this.trashService.getAble(action.id, action.able).pipe(
          map(() => setAble({ able: action.able })),
          catchError((err) => {
            this.alert.showNotificationError(err.error).subscribe();
            return EMPTY;
          })
        )
      )
    )
  );
  setAbled$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setAble),
        map((action) => {
          if (action.able == true)
            this.alert
              .showNotificationError('Контейнер заблокирован')
              .subscribe();
          else
            this.alert
              .showNotificationSuccess('Контейнер разблокирован')
              .subscribe();
        })
      ),
    { dispatch: false }
  );
  getTrashs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTrashs),
      mergeMap((action) =>
        this.trashService.getTrashs(action.filter).pipe(
          map((res) => setTrashs({ trashs: res })),
          catchError((err) => {
            this.alert.showNotificationError(err.error).subscribe();
            return EMPTY;
          })
        )
      )
    )
  );
  getStoryTrash$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStoryTrash),
      mergeMap((action) =>
        this.trashService.getStoryTrash(action.id).pipe(
          map((res) => setStoryTrash({ story: res })),
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
    private trashService: TrashService
  ) {}
}
