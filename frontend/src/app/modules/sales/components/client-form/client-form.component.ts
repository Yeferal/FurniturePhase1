import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/core/models/client';
import { ClientService } from 'src/app/modules/sales/services/client/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})

export class ClientFormComponent implements OnInit {

  @Input() isEdit: boolean;
  client: Client;

  clientForm: FormGroup = new FormGroup({
    clientNit: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
    clientFullName: new FormControl('',[Validators.required]),
    clientAddress: new FormControl('',[Validators.required])
  });

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  doChanges(){}

  searchClient(event: any){
    this.clientService.getClient(event.target.value).subscribe(
      (response)=>{
        if(Array.isArray(response)){
          this.client = response[0];
        } else {
          this.client = response;
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}