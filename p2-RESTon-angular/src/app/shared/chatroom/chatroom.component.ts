
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'rev-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  // rooms: Array<Room> = new Array<Room>();  
  public isMobile: boolean = false;
  users: Array<User>;
  currentUser: User;;
  receiver: User;

  constructor(private messageService: MessageService, private userService: UserService,private authService: AuthService, breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      // Breakpoints.Handset
      '(max-width: 1200px)'
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  
  ngOnInit(): void {
    this.currentUser = this.authService.loggedInUser.value;
    this.getUser();
    this.getUsers();
  }

  checkUser(user: User): string {
    // console.log(user);
    // console.log(this.currentUser);
    if(user.id === this.currentUser.id) {
      return "(You)";
    }
  }

  getUser(): void {
    // console.log(this.currentUser);
  }

  //retrieves, populates, and creates chatrooms
  getRooms(): void {

  }

  setUser(user: User) {
    this.receiver = user;
  }

  getUsers(): void {
    this.userService.getAllEmployees()
    .then(users => this.users = users).catch();
  }
}
