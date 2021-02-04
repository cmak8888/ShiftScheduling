import { Component, OnInit } from '@angular/core';
import { BulletinMessage } from 'src/app/models/bulletin-message';
import { Position } from 'src/app/models/position';
import { User } from 'src/app/models/user';
import { BulletinServiceService } from 'src/app/services/bulletin-service.service';
import { PositionService } from 'src/app/services/position.service';

@Component({
  selector: 'rev-manager-shout-form',
  templateUrl: './manager-shout-form.component.html',
  styleUrls: ['./manager-shout-form.component.scss']
})
export class ManagerShoutFormComponent implements OnInit {

  positions: Array<Position>;

  constructor(private bulletinService: BulletinServiceService, private positionService: PositionService) { }

  ngOnInit(): void {
  }
}
