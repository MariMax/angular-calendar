import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgbTabsetModule,
  NgbCollapseModule,
  NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import { Angulartics2Module } from 'angulartics2';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { DemoAppComponent } from './demo-app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [DemoAppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbTabsetModule,
    NgbCollapseModule,
    NgbTooltipModule,
    DragAndDropModule,
    Angulartics2Module.forRoot({
      developerMode: !environment.production
    }),
    PerfectScrollbarModule,
    ClipboardModule,
    RouterModule.forRoot(
      [
        {
          path: 'week-view-minute-precision',
          loadChildren: () =>
            import('./demo-modules/week-view-minute-precision/module').then(
              m => m.DemoModule
            ),
          data: {
            label: 'Week view minute precision'
          }
        },
        {
          path: '**',
          redirectTo: 'week-view-minute-precision'
        }
      ],
      {
        useHash: true
      }
    )
  ],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule {}
