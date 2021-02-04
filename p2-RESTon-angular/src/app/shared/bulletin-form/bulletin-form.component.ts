import { Component, OnInit, Input} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { BulletinMessage } from 'src/app/models/bulletin-message';
import { Position } from 'src/app/models/position';
import { PositionService } from 'src/app/services/position.service';
import { BulletinServiceService } from 'src/app/services/bulletin-service.service';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'rev-bulletin-form',
  templateUrl: './bulletin-form.component.html',
  styleUrls: ['./bulletin-form.component.scss']
})
export class BulletinFormComponent implements OnInit {
  message: BulletinMessage = new BulletinMessage();
  @Input() positions: Array<Position>;
  currentUser: User;

  targetPosition: Position = new Position();
  error: string;

  myForm: FormGroup

  constructor(private fb: FormBuilder, private bulletinService: BulletinServiceService, private positionService: PositionService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.loggedInUser.value;
    this.getUser();
    // this.getPositions();
    this.targetPosition.name = 'All';
    this.myForm = this.fb.group({
      positionName: ['', [
        Validators.required
      ]],
      messageContent: ['', [
        Validators.required
      ]]
    });
  }


  getUser(): void {
  }

  // getPositions(): void {
  //   this.positionService.getPositions()
  //   .then(pos => {
  //     this.positions = pos;
  //   }, error => console.log(error))
  // }

  // setTargetPosition(position): void {
  //   // console.log(position);
  //   this.positions.forEach(pos => {
  //     if(position === pos.name) {
  //       this.targetPosition = pos;
  //       return;
  //     }
  //   });
  // }

  onClear(): void {
    this.message = null;
  }

  onSubmit(event){
    event.preventDefault();
    this.message.user = this.currentUser;
    // if (this.targetPosition.id == 0) {
    //   this.targetPosition = null;
    // }
    this.message.position = null;
    this.message.time = new Date();
    this.message.content = this.message.content.trim();

    this.bulletinService.postBulletinMessage(this.message)
    .then(message => {
      console.log(message);
      this.message = new BulletinMessage();
    }).catch(
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.message = new BulletinMessage();
      }
    );
  }
}
