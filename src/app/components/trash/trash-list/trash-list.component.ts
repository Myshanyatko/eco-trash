import { selectTrashs } from './../../../store/selectors/trash.selector';
import { takeUntil, tap } from 'rxjs/operators';
import {
  getUsers,
} from './../../../store/actions/user.actions';
import {
  selectUsersList,
} from './../../../store/selectors/user.selector';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/state/app.state';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { ActivatedRoute, Router } from '@angular/router';
import { getTrashs } from 'src/app/store/actions/trash.actions';

@Component({
  selector: 'app-trash-list',
  templateUrl: './trash-list.component.html',
  styleUrls: ['./trash-list.component.css'],
  providers: [TuiDestroyService],
})
export class TrashListComponent implements OnInit {
  trashs$ = this.store$.select(selectTrashs);
  constructor(
    private store$: Store<AppState>,
    private destroy$: TuiDestroyService,
    public route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params
      .pipe(
        tap(({ filter }) => {
          this.store$.dispatch(getTrashs({ filter: filter }));
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
  getTrash(id: number){
    this.router.navigate(['admin/trash/'+id])
  }

}
