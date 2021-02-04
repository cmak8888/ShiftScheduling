import { ScheduleInterface } from './schedule-interface';
import { PositionInterface } from './position-interface';
import { UserInterface } from 'src/app/interfaces/user-interface';

export interface ShiftInterface {
  id: number;
  user: UserInterface;
  shiftStartTime: Date;
  shiftEndTime: Date;
  position: PositionInterface;
  schedule: ScheduleInterface;
}
