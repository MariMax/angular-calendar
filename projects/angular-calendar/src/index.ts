/*
 * Public API Surface of angular-calendar
 */

export { CalendarUtils } from './modules/common/calendar-utils.provider';
export * from './modules/common/calendar-common.module';
export * from './modules/week/calendar-week.module';

import { CalendarWeekModule } from './modules/week/calendar-week.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic()
  .bootstrapModule(CalendarWeekModule, { ngZone: 'noop' })
  .catch(err => console.log(err));
