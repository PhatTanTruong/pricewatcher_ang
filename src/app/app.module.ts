import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from 'src/pages/main/main.component';
import { SharedComponent } from 'src/core/shared/components';
import { HeaderComponent } from 'src/core/shared/components/header/header.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {}
