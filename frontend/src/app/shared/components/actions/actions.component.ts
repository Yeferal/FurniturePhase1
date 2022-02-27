import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  @Input() infModalId: string = 'undefined';
  @Input() formModalId: string = 'undefined';
  @Input() deleteModalId: string = 'undefined';
  @Input() addButton: boolean = false;
  @Input() removeButton: boolean = false;
  @Input() model: string;
  @Input() id: number;
  @Output() messageEvent = new EventEmitter<number>(); //Para enviar el id que se seleccionó
  @Output() isEditEvent = new EventEmitter<boolean>(); //Para enviar si es edición o creación
  @Output() pressedButtonTypeEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.id);
  }

  updateOutputId(){
    this.messageEvent.emit(this.id);
  }

  updateIsEdit(value: boolean){
    this.isEditEvent.emit(value);
  }

  updatePressedButton(value: string){
    this.pressedButtonTypeEvent.emit(value);
  }
}
