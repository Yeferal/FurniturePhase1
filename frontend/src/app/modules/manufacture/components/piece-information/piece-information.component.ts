import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-piece-information',
  templateUrl: './piece-information.component.html',
  styleUrls: ['./piece-information.component.scss']
})
export class PieceInformationComponent implements OnInit {

  @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
