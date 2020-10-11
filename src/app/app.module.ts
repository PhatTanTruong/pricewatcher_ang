import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from 'src/pages/main/main.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedComponent } from './core/shared/components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, ...SharedComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatIconModule, MatButtonModule],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {}
