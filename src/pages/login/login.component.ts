import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { CustomValidators } from '../../app/core/shared/validators/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) {}

  loginForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [CustomValidators.emailFormat(), CustomValidators.required()]),
      password: new FormControl('', [CustomValidators.minLength(8), CustomValidators.required()])
    });
  }

  handleLogin() {
    if (this.loginForm.valid) {
      this.route.navigate(['/']);
    }
  }

  updateLabel(event: any, label: HTMLElement) {
    if (event.target.value.length && !label.classList.contains('input-dirty')) {
      label.classList.add('input-dirty');
    }
    if (!event.target.value.length && label.classList.contains('input-dirty')) {
      label.classList.remove('input-dirty');
    }
  }
}
