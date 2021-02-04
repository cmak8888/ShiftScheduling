import { BulletinMessageInterface } from './../interfaces/bulletin-message-interface';
export class BulletinMessage implements BulletinMessageInterface {
  id = 0;
  user = null;
  content = '';
  time = null;
  position = null;
}
