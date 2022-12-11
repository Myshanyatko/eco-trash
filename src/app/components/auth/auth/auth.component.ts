import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  errors = false;

  constructor(private fb: FormBuilder, private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  login(): void {
    if (
      this.authForm.get('login')?.invalid ||
      this.authForm.get('password')?.invalid
    )
      this.errors = true;
    else {
      this.store$.dispatch(
        login({
          email: this.authForm.value.login,
          password: this.authForm.value.password,
        })
      );
      this.errors = false;
    }
  }
}
