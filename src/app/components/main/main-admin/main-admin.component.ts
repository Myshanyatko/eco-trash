import { Router } from '@angular/router';
import { getUsers } from './../../../store/actions/user.actions';
import { AppState } from './../../../store/state/app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { getTrashs } from 'src/app/store/actions/trash.actions';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css'],
})
export class MainAdminComponent implements OnInit {
  authForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store$: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      user: ['', [Validators.required]],
      trashCan: ['', [Validators.required]],
    });
  }
  searchUsers() {
    this.store$.dispatch(getUsers({ filter: this.authForm.value.user }));
    this.router.navigate(['admin/user-list/filter/'+this.authForm.value.user]);
  }
  searchTrashCan() {
    this.store$.dispatch(getTrashs({ filter: this.authForm.value.trashCan }));
    this.router.navigate(['admin/trash-list/filter/'+this.authForm.value.trashCan]);
  }
}
