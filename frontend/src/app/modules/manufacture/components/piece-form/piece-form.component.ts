import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-piece-form',
  templateUrl: './piece-form.component.html',
  styleUrls: ['./piece-form.component.scss']
})
export class PieceFormComponent implements OnInit {

  @Input() isEdit: boolean;
  @Input() selectedId: number;

  constructor() { }

  ngOnInit(): void {
  }
  
}
