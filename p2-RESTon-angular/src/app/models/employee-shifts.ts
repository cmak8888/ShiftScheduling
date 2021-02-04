import { Availability } from './availability';
import { Shift } from './shift';
export class EmployeeShifts {
  employeeName: string = '';
  availability: Availability = null;
  shifts: Shift[] = [];
}
