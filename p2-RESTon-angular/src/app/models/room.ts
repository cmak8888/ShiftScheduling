import { RoomInterface } from '../interfaces/room-interface';
import { PositionInterface } from './../interfaces/position-interface';
import { Message } from './message';
import { User } from './user';
export class Room implements RoomInterface {
  id = 0;
  users = new Array<User>();
  messages = new Array<Message>();
}
