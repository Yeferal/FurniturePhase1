import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  @Input() infModalId: string;
  @Input() formModalId: string;
  @Input() deleteModalId: string;
  @Input() addButton: boolean;
  @Input() model: string;
  @Input() id: number;
  @Output() messageEvent = new EventEmitter<number>();
  @Output() isEditEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.id);
  }

  updateOutputId(){
    this.messageEvent.emit(this.id);
  }

  updateIsEdit(){
    this.isEditEvent.emit(true);
  }

}
