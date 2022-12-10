import { takeUntil, tap } from 'rxjs/operators';
import {
  getUser,
  getStory,
  setStory,
} from './../../../store/actions/user.actions';
import {
  selectUser,
  selectStory,
} from './../../../store/selectors/user.selector';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/state/app.state';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [TuiDestroyService],
})
export class UserComponent implements OnInit {
  user$ = this.store$.select(selectUser);
  // story = [
  //   { date: '16-04-2001 12:09', operation: 'начисление 30 баллов' },
  //   { date: '16-04-2001 12:09', operation: 'начисление 30 баллов' },
  //   { date: '16-04-2001 12:09', operation: 'начисление 30 баллов' },
  // ];
  story$ = this.store$.select(selectStory);
  constructor(
    private store$: Store<AppState>,
    private destroy$: TuiDestroyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('user');

    this.route.params
      .pipe(
        tap(({ id }) => {
          this.store$.dispatch(getUser({ id: Number(id) }));
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  openStory() {
    this.user$.subscribe((user) => {
      if (user != null) this.store$.dispatch(getStory({ id: user.id }));
    });
  }
  closeStory() {
    this.store$.dispatch(setStory({ story: null }));
  }
}
