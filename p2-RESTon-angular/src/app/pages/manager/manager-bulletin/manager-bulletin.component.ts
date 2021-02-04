import { Component, Input, OnInit } from '@angular/core';
import { BulletinMessage } from 'src/app/models/bulletin-message';
import { BulletinServiceService } from 'src/app/services/bulletin-service.service';

@Component({
  selector: 'rev-manager-bulletin',
  templateUrl: './manager-bulletin.component.html',
  styleUrls: ['./manager-bulletin.component.scss']
})
export class ManagerBulletinComponent implements OnInit {

  myMessages: Array<BulletinMessage>;

  constructor(private bulletinService: BulletinServiceService) { }

  ngOnInit(): void {

    this.bulletinService.BulletinMessages.subscribe(messages => {
      this.myMessages = messages;
    });
  }

}
