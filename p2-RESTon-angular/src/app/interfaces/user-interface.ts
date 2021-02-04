import { AvailabilityInterface } from './availability-interface';
export interface UserInterface {
  id: number;
  firstName :string;
  lastName :string;
  email: string;
  password: string;
  isManager: boolean;
  phone: number;
  availability: AvailabilityInterface;
}
