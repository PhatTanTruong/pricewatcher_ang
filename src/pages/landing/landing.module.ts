import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';

import { MatInputModule } from '@angular/material/input';
import { LandingRoutingModule } from './landing-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, MatInputModule, LandingRoutingModule, MatFormFieldModule, MatButtonModule],
  exports: [LandingComponent]
})
export class LandingModule {}
