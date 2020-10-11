import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SCREEN_PATH } from '../../app/core/shared/app-constants/app.constants';
import { CustomValidators } from '../../app/core/shared/validators/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private route: Router) {}

  registerForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', [CustomValidators.emailFormat(), CustomValidators.required()]),
        password: new FormControl('', [CustomValidators.minLength(8), CustomValidators.required()]),
        rePassword: new FormControl('', [CustomValidators.minLength(8), CustomValidators.required()])
      },
      CustomValidators.matchValue('password', 'rePassword')
    );
  }

  handleRegister() {
    if (this.registerForm.valid) {
      this.route.navigate([`/${SCREEN_PATH.LOGIN}`]);
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
