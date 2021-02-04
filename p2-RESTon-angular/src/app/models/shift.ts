import { PositionInterface } from '../interfaces/position-interface';
import { ScheduleInterface } from '../interfaces/schedule-interface';
import { UserInterface } from '../interfaces/user-interface';
import { ShiftInterface } from './../interfaces/shift-interface';
export class Shift implements ShiftInterface {
  id: number = 0;
  user: UserInterface = null;
  shiftStartTime: Date = null;
  shiftEndTime: Date = null;
  position: PositionInterface = null;
  schedule: ScheduleInterface = null;
}
