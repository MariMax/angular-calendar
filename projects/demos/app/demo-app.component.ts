import { Component } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import { addHours, startOfDay, addDays } from 'date-fns';
import { Subject } from 'rxjs';
import { CalendarEventTimesChangedEvent } from 'angular-calendar';
import { colors } from './demo-modules/demo-utils/colors';

@Component({
  selector: 'mwl-demo-app',
  styleUrls: ['./demo-app.css'],
  templateUrl: './demo-app.html'
})
export class DemoAppComponent {
  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      start: addHours(startOfDay(new Date()), 5),
      end: addHours(startOfDay(addDays(new Date(), 1)), 2),
      title: 'Event 1',
      color: colors.red,
      allDay: false,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    },
    {
      start: addHours(startOfDay(addDays(new Date(), 1)), 2),
      end: addHours(startOfDay(addDays(new Date(), 1)), 18),
      title: 'Event 2',
      color: colors.blue,
      allDay: false,
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 8),
      title: 'Event 3',
      color: colors.blue,
      allDay: false,
      draggable: true
    }
  ];

  refresh: Subject<void> = new Subject();

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }
}
