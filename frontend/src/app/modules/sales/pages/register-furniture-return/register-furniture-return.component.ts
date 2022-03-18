import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FurnitureReturnService } from '../../services/furniture-return.service';

interface DataReturn {
  min: any;
  max: any;
  amount: any;
  codeFurniture: any;
  nitClient: any;
  nameProduct: any;
}

@Component({
  selector: 'app-register-furniture-return',
  templateUrl: './register-furniture-return.component.html',
  styleUrls: ['./register-furniture-return.component.scss']
})
export class RegisterFurnitureReturnComponent implements OnInit {

  openContent = false;
  invoiceForm: FormGroup = new FormGroup({
    noInvoice: new FormControl(null, [Validators.required,Validators.pattern("[0-9]+")])
  });
  selectedId: any = 1;
  isExistInvoice = false;
  aprovedReturn = false;
  desaprovedReturn = false;
  nitClient = 0;
  addressClient = "";
  nameClient = "";
  auxReturn: DataReturn;

  constructor(private furnitureRequestService:FurnitureReturnService) { }

  ngOnInit(): void {
    
  }

  openCont(){
    this.openContent = !this.openContent;
  }
  sumTotal = 0;
  buscarFactura(){
    if (this.invoiceForm.invalid) {
      return ;
    }
    this.furnitureRequestService.getDetailBill(this.invoiceForm.value.noInvoice).subscribe(
      result => {
        this.sumTotal =0;
        this.detailBills = result;
        this.detailBills.forEach(detail => {
          this.sumTotal+=detail[1]
          console.log(this.sumTotal);
          
        });
        this.aprovedReturn = true;
        this.furnitureRequestService.getDetailClientByBillId(this.invoiceForm.value.noInvoice).subscribe(
          res => {
            this.nameClient = res[0],
            this.nitClient = res[1],
            this.addressClient = res[2]
          },
          err => {this.sumTotal =0;}
        )
      },
      err => {
        console.log(err);
      }
    );
  }

  setData(min: any, max: any, amount: any, codeFurniture: any, nitClient: any, nameProduct: any):DataReturn {
    let  dataN = {
      min,
      max,
      amount,
      codeFurniture,
      nitClient,
      nameProduct,
    }

    return dataN;
    
  }

  detailBills:Array<any> = []

  removeItem(id:number){
    console.log("ENTROO");
    this.detailBills=this.detailBills.filter(x=>x[3]!=id);
  }
}
