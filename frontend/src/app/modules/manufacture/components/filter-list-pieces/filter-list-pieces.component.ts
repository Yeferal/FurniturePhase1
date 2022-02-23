import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filter-list-pieces',
  templateUrl: './filter-list-pieces.component.html',
  styleUrls: ['./filter-list-pieces.component.scss']
})
export class FilterListPiecesComponent implements OnInit {

  search = new FormControl('');
  @Output('search') searchEmmiter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges
    .pipe(
      debounceTime(300)
    ).subscribe(value => this.searchEmmiter.emit(value));
  }

}
