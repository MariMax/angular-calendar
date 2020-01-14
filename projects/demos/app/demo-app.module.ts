import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoAppComponent } from './demo-app.component';
import { CalendarWeekModule } from 'angular-calendar';

@NgModule({
  declarations: [DemoAppComponent],
  imports: [BrowserModule, CalendarWeekModule],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule {}
