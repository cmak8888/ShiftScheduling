import { Availability } from "./models/availability";
import { Message } from "./models/message";
import { Position } from "./models/position";
import { Shift } from "./models/shift";
import { User } from "./models/user";


export class DummyData {
    constructor() {}

    getAvailability(): Availability {
        let availability = new Availability();
        availability.id = 0;
        availability.monday = false;
        availability.tuesday = false;
        availability.wednesday = false;
        availability.thursday = false;
        availability.friday = false;
        availability.saturday = false;
        availability.sunday = false;
        return availability;
    }

    getUser(): User  {
        let user = new User();
        user.id = 0;
        user.firstName = '';
        user.lastName = '';
        user.password = '';
        user.phone = 0;
        user.isManager = false;
        user.availability = this.getAvailability();
        return user;
    }

    getPosition(): Position {
        let positon = new Position();
        positon.id = 0;
        positon.name = '';
        return positon;
    }

    getShift(): Shift {
        let shift = new Shift();
        shift.position = this.getPosition();
        shift.id = 0;
        shift.user = this.getUser();
        shift.shiftStartTime = new Date();
        shift.shiftEndTime = new Date();
        return shift;
    }

    getMessage(): Message {
        return new Message();
    }
}