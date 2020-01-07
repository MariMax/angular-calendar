import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { addDays, addHours, startOfDay } from 'date-fns';
import { colors } from '../demo-utils/colors';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { Subject } from 'rxjs';

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'template.html'
})
export class DemoComponent {
  viewDate: Date = new Date();
  dateAdapter = adapterFactory();

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
