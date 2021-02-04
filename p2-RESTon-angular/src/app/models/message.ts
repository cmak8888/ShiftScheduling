import { User } from './user';
import { MessageInterface } from './../interfaces/message-interface';
export class Message implements MessageInterface {
  id = 0;
  sender: User = null;
  content = '';
  time = null;
  reciever: User = null;
}
