import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() tittle: string;
  @Input() action: string;
  @Input() link_action: string;

  constructor() { }

  ngOnInit(): void {
  }

}