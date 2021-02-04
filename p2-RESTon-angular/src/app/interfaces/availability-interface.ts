import { User } from "../models/user";

export interface AvailabilityInterface {
  id: number;
  user: User;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}
