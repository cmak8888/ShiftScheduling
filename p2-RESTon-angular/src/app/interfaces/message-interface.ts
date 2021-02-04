import { User } from "../models/user";

export interface MessageInterface {
  id: number;
  sender: User;
  content: string;
  time: Date;
  reciever: User;
}
