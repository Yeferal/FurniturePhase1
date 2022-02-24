import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-furniture-information',
  templateUrl: './furniture-information.component.html',
  styleUrls: ['./furniture-information.component.scss']
})
export class FurnitureInformationComponent implements OnInit {

  @Input() id: number;
  
  constructor() { }

  ngOnInit(): void {}
  
}