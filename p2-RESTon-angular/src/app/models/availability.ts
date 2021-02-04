import { AvailabilityInterface } from './../interfaces/availability-interface';
export class Availability implements AvailabilityInterface {
  id = 0;
  user = null;
  monday = false;
  tuesday = false;
  wednesday = false;
  thursday = false;
  friday = false;
  saturday = false;
  sunday = false;
  constructor() {}
}
