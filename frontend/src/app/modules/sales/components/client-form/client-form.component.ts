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
  clients: Array<Client> = [
    // {
    //   "nit": 1,
    //   "name": "José Soberanis",
    //   "address": "Colonia los almendros"
    // },
    // {
    //   "nit": 2,
    //   "name": "Carlos Ramirez",
    //   "address": "Colonia los cerezos"
    // },
    // {
    //   "nit": 3,
    //   "name": "Daniel Gonzalez",
    //   "address": "Colonia los aceitunos"
    // },
    // {
    //   "nit": 4,
    //   "name": "Josue Lopez",
    //   "address": "Colonia los saltos"
    // },
    // {
    //   "nit": 5,
    //   "name": "Jhonny Garcia",
    //   "address": "Colonia los buenos dias"
    // },
    // {
    //   "nit": 6,
    //   "name": "Yefer Alvarado",
    //   "address": "Colonia los salvadoreñso"
    // },
    // {
    //   "nit": 7,
    //   "name": "Mario Ramirez",
    //   "address": "Colonia los salvajes"
    // }
  ];

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
    for(let i = 0; i < this.clients.length; i++){
      if(this.clients[i].nit == event.target.value){
        this.client = this.clients[i];
        this.sendClientUpdate();
        break;
      }
    }
    /* this.clientService.getClient(event.target.value).subscribe(
      (response)=>{
        if(Array.isArray(response)){
          this.client = response[0];
        } else {
          this.client = response;
        }
        this.sendClientUpdate();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );*/
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