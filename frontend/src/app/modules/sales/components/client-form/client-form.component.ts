import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() foundClientEvent = new EventEmitter<Client>();
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
      (response:any)=>{
        if(response.found){
          if(Array.isArray(response)){
            this.client = response[0].client;
          } else {
            this.client = response.client;
          }
        }else{
          this.client = new Client();
          this.client.id = event.target.value;
        }
        this.sendClientUpdate();
      },
      (error: HttpErrorResponse) => {
        alert("Ocurrio un error en el servidor al buscar al cliente");
      }
    );
  }

  updateClientFullName(event: any){
    this.client.name = event.target.value;
    this.sendClientUpdate();
  }

  updateClientAddress(event: any){
    this.client.address = event.target.value;
    this.sendClientUpdate();
  }

  sendClientUpdate(){
    this.foundClientEvent.emit(this.client);
  }
}