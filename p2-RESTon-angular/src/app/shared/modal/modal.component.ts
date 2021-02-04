import { EventEmitter } from '@angular/core';
import { Component, Inject, Injectable, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

// @Injectable()
@Component({
  selector: 'rev-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() closeModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.closeModal.emit();
  }
}
