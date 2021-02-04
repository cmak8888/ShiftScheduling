import { Position } from './../models/position';
import { User } from "../models/user";

export interface BulletinMessageInterface {
  id: number;
  user: User;
  content: string;
  time: Date;
  position: Position;
}
