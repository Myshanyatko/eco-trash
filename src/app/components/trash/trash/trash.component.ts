import { takeUntil, tap } from 'rxjs/operators';
import {
  getUser,
  getStory,
  setStory,
} from './../../../store/actions/user.actions';
import {
  selectUser,
  selectStory,
  selectDate,
} from './../../../store/selectors/user.selector';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/state/app.state';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { selectStoryTrash, selectTrash } from 'src/app/store/selectors/trash.selector';
import { getAble, getStoryTrash, getTrash, setStoryTrash } from 'src/app/store/actions/trash.actions';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css'],
  providers: [TuiDestroyService],
})
export class TrashComponent implements OnInit {
  isStory = false;
  trash$ = this.store$.select(selectTrash);
  story$ = this.store$.select(selectStoryTrash);
  
  constructor(
    private store$: Store<AppState>,
    private destroy$: TuiDestroyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        tap(({ id }) => {
          this.store$.dispatch(getTrash({ id: Number(id) }));
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  openStory() {
    this.isStory = true;
    this.trash$.subscribe((trash) => {
      if (trash != null) this.store$.dispatch(getStoryTrash({ id: trash.id }));
    });
  }
  closeStory() {
    this.isStory = false;
    this.store$.dispatch(setStoryTrash({ story: null }));
  }
  able() {
    // this.trash$
    //   .subscribe((trash) => {
    //     if (trash != null)
    //       this.store$.dispatch(getAble({ able: true, id: trash.id }));
    //   })
    //   .unsubscribe();
    this.store$.dispatch(getAble({ able: true, id: 21 }));
  }
  disable() {
    // this.trash$
    // .subscribe((trash) => {
    //   if (trash != null)
    //     this.store$.dispatch(getAble({ able: false, id: trash.id }));
    // })
    // .unsubscribe();
    this.store$.dispatch(getAble({ able: false, id: 21 }));
}
}