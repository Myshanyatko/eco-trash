import { Actions, ofType } from '@ngrx/effects';
import { map, takeUntil, tap } from 'rxjs/operators';
import {
  getUser,
  getStory,
  setStory,
  useBonuses,
  setUser,
} from './../../../store/actions/user.actions';
import {
  selectUser,
  selectStory,
  selectDate,
} from './../../../store/selectors/user.selector';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/state/app.state';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { tuiInputCountOptionsProvider } from '@taiga-ui/kit';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css'],
  providers: [
    TuiDestroyService,
    tuiInputCountOptionsProvider({
      icons: {
        up: `tuiIconChevronUp`,
        down: `tuiIconChevronDown`,
      },
      appearance: `secondary`,
      step: 1,
      min: 0,
      max: 100,
    }),
  ],
})
export class AdminUserComponent implements OnInit, OnDestroy {
  isStory = false;
  user$ = this.store$.select(selectUser);
  story$ = this.store$.select(selectStory);
  date$ = this.store$.select(selectDate);
  loading = true;
  bonuses!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store$: Store<AppState>,
    private destroy$: TuiDestroyService,
    private route: ActivatedRoute,
    private actions$: Actions,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bonuses = this.fb.group({
      count: [],
    });
    // this.user$.subscribe(user => this.bonuses.addControl('count',new FormControl( user?.bonuses)))
    this.route.params
      .pipe(
        tap(({ id }) => {
          this.store$.dispatch(getUser({ id: Number(id) }));
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
    this.actions$
      .pipe(
        ofType(setUser),
        map(() => (this.loading = false))
      )
      .subscribe();
  }

  openStory() {
    this.isStory = true;
    this.user$.subscribe((user) => {
      if (user != null) this.store$.dispatch(getStory({ id: user.id }));
    });
  }
  closeStory() {
    this.isStory = false;
    this.store$.dispatch(setStory({ story: null }));
  }
  useBoneses() {
    this.user$
      .subscribe((user) => {
        if (user != null)
          this.store$.dispatch(
            useBonuses({ bonuses: this.bonuses.value.count, id: user.id })
          );
      })
      .unsubscribe();
  }
  ngOnDestroy(): void {
    this.isStory = false
  }
}
