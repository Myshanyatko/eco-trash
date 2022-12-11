import { FormGroup, FormBuilder } from '@angular/forms';
import { takeUntil, tap } from 'rxjs/operators';
import {
  getUser,
  getStory,
  setStory,
  useBonuses,
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

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [TuiDestroyService],
})
export class UserComponent implements OnInit {
  isStory = false
  user$ = this.store$.select(selectUser);
  story$ = this.store$.select(selectStory);
  date$ = this.store$.select(selectDate);
  bonuses!: FormGroup;
  loading= true

  constructor(
    private fb: FormBuilder,
    private store$: Store<AppState>,
    private destroy$: TuiDestroyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bonuses = this.fb.group({
      count: [],
    });
    this.route.params
      .pipe(
        tap(({ id }) => {
          this.loading = false
          this.store$.dispatch(getUser({ id: Number(id) }));
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
      console.log(this.loading);
      
  }

  openStory() {
    this.isStory = true
    this.user$.subscribe((user) => {
      if (user != null) this.store$.dispatch(getStory({ id: user.id }));
    });
  }
  closeStory() {
    this.isStory = false
    this.store$.dispatch(setStory({ story: null }));
  }
  logout(){
    this.router.navigate([''])
  }
  useBoneses() {
    window.open('https://www.gosuslugi.ru/', "_blank");
    this.user$.subscribe((user) => {
      if (user != null)
        this.store$.dispatch(
          useBonuses({ bonuses: this.bonuses.value.count, id: user.id })
        );
    }).unsubscribe();
  }
}
