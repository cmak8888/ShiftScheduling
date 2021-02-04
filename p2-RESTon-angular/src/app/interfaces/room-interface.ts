import { Message } from "../models/message";
import { User } from "../models/user";

export interface RoomInterface {
    id: number;
    users: Array<User>;
    messages: Array<Message>;
}