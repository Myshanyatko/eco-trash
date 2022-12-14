import { Actions, ofType } from '@ngrx/effects';
import { map, takeUntil, tap } from 'rxjs/operators';
import {
  getUsers, setUsers,
} from './../../../store/actions/user.actions';
import {
  selectUsersList,
} from './../../../store/selectors/user.selector';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/state/app.state';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [TuiDestroyService],
})
export class UserListComponent implements OnInit {
  users$ = this.store$.select(selectUsersList);
  loading = true

  constructor(
    private store$: Store<AppState>,
    private destroy$: TuiDestroyService,
    public route: ActivatedRoute,
    private actions$: Actions,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params
      .pipe(
        tap(({ filter }) => {
          this.store$.dispatch(getUsers({ filter: filter }));
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
      this.actions$
      .pipe(
        ofType(setUsers),
        map(() => (this.loading = false))
      )
      .subscribe();
  
  }
  getUser(id: number){
    this.router.navigate(['admin/user/'+id])
  }
}
