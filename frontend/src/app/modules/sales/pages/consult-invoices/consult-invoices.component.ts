import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoicesService } from '../../services/invoices.service';

@Component({
  selector: 'app-consult-invoices',
  templateUrl: './consult-invoices.component.html',
  styleUrls: ['./consult-invoices.component.scss']
})
export class ConsultInvoicesComponent implements OnInit {

  formInvoices: FormGroup = new FormGroup({
    noInvoices: new FormControl(null, Validators.required)
  });
  
  noInvoicesError = false;

  openContent = false;
  constructor(private invoicesService: InvoicesService) { }

  ngOnInit(): void {
  }

  openCont(){
    this.openContent = !this.openContent;
  }

  searchInvoices(){
    if (this.formInvoices.invalid) {
      this.noInvoicesError = true;
      return ;
    }
    console.log(this.formInvoices.value);
    this.invoicesService.getOneInvoice(this.formInvoices.get('noInvoices')?.value).subscribe(
      res => {
        console.log(res);
        
      },
      error => {
        console.log(error);
        
      }
    );
    
  }



}
