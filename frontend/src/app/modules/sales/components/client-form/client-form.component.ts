import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})

export class ClientFormComponent implements OnInit {

  @Input() isEdit: boolean;

  clientForm: FormGroup = new FormGroup({
    clientNit: new FormControl('',[Validators.required,Validators.pattern('[0-9]+]')]),
    clientFullName: new FormControl('',[Validators.required]),
    clientAddress: new FormControl('',[Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  doChanges(){}
}