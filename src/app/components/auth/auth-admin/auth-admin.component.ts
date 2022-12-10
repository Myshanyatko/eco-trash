import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login, loginAdmin } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-auth-admin',
  templateUrl: './auth-admin.component.html',
  styleUrls: ['./auth-admin.component.css'],
})
export class AuthAdminComponent implements OnInit {
  authForm!: FormGroup;
  constructor(private fb: FormBuilder, private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  login(): void {
    this.store$.dispatch(
      loginAdmin({
        email: this.authForm.value.login,
        password: this.authForm.value.password,
      })
    );
  }
}
