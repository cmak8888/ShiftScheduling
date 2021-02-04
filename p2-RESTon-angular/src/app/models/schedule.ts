import { ShiftInterface } from './../interfaces/shift-interface';
import { ScheduleInterface } from './../interfaces/schedule-interface';
export class Schedule implements ScheduleInterface {
  id = 0;
  startDate: Date = null;
  active: boolean;
  shifts: ShiftInterface[] = [];
}
