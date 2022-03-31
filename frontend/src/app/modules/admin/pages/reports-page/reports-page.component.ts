import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReportsService } from '../../services/reports.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss']
})
export class ReportsPageComponent implements OnInit {

  reportForm: FormGroup = new FormGroup({
    date1: new FormControl(),
    date2: new FormControl()
  });

  page: number = 0;

  typeReportSelected: number;
  items: Array<any> = [];

  formFilter = new FormGroup(
    {
      dateStart:new FormControl(),
      dateEnd:new FormControl(),
      name:new FormControl()
    }
  );

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
  }

  getReport(){
    console.log("entro", this.typeReportSelected);
    switch (this.typeReportSelected+"") {
      case '0':
        break;
      case '1':
        this.getReportSales();
        break;
      case '2':
        this.getReturnFurnitures()
        break;
      case '3':
        this.getReportEarnings();
        break;
      case '4':
        this.getReportMaxFurnitureXPeriod();
        break;
      case '5':
        this.getReportMinFurnitureXPeriod();
        break;
      case '6':
        this.getReportBestSellerXPeriod();
        break;
      case '7':
        this.getReportBestEarnerXPeriod();
        break;
    }
  }

  export(){
    switch (this.typeReportSelected+"") {
      case '0':
        break;
      case '1':
        this.exportReportSales();
        break;
      case '2':
        this.exportReturnFurnitures()
        break;
      case '3':
        this.exportReportEarnings();
        break;
      case '4':
        this.exportReportMaxFurnitureXPeriod();
        break;
      case '5':
        this.exportReportMinFurnitureXPeriod();
        break;
      case '6':
        this.exportReportBestSellerXPeriod();
        break;
      case '7':
        this.exportReportBestEarnerXPeriod();
        break;
    }
  }
  
  listDevolutions = []
  getReturnFurnitures(){
      let   page = this.page
      let date1 = this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '0001-01-01'
      let date2 =  this.reportForm.get('date2')?.value? this.reportForm.get('date2')?.value : '9999-01-01'
      this.reportsService.getReturnFurnitures(page,date1,date2).subscribe(
        res => {
          console.log(res);
          this.listDevolutions = res
        },
        err => console.log(err)
      )
  }

  exportReturnFurnitures(){
    let sendedItems:any = [];
    this.items.forEach(item => {
      sendedItems.push({
        furniture: item[0],
        salePrice: item[3],
        cost: item[1],
        date: item[2],
        nitCliente: item[4] 
      })
    });
    this.reportsService.exportReturnFurnitures({data: sendedItems}).subscribe(
      res => {
        const blob1 = new Blob([res], { type: 'text/csv' });
        saveAs(blob1, 'data.csv');
      },
      error => {
        console.log(error);
        const blob1 = new Blob([error], { type: 'text/csv' });
        saveAs(blob1, 'data.csv');
        console.log("Error");
      }
    )
  }

  setSelected(event: any){
    this.typeReportSelected = event.target.value;
    this.listDevolutions = [];
    this.items = [];
  }

  getReportSales(){
    let data = {
      page: this.page,
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '0001-01-01',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date2')?.value : '9999-01-01'
    }
    console.log(data);
    
    
    this.reportsService.getReportSalesXPeriod(data).subscribe(
      res => {
        console.log(res);
        this.items = res;
        
        
      },
      error => {
        console.log(error);
        
      }
    );
  }

  exportReportSales(){
    let sendedItems:any = [];
    this.items.forEach(item => {
      sendedItems.push({
        client: item.bill.client.name,
        stringFurniture: item.furniture.name,
        furnitureCode: item.furniture.code,
        price: item.priceSale,
        date: item.bill.dateTime
      })
    });
    this.reportsService.exportReportSalesXPeriod(sendedItems).subscribe(
      res => {
        console.log("Todo bien");
        const blob1 = new Blob([res], { type: 'text/csv' });
        saveAs(blob1, 'data.csv');
      },
      error => {
        console.log(error);
        const blob1 = new Blob([error], { type: 'text/csv' });
        saveAs(blob1, 'data.csv');
        console.log("Error");
      }
    )
  }

  getReportEarnings(){
    let data = {
      page: this.page,
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '0001-01-01',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date2')?.value : '9999-01-01'
    }
    console.log(data);
    
    
    this.reportsService.getReportEarningsXPeriod(data).subscribe(
      res => {
        console.log(res);
        this.items = res;
      },
      error => {
        console.log(error);
        
      }
    );
  }
  
  exportReportEarnings(){
    let sendedItems:any = [];
    this.items.forEach(item => {
      sendedItems.push({
        invoiceNumber: item.bill.id,
        codeFurniture: item.furniture.code,
        totalPrice: item.priceSale,
        cost: item.furniture.cost,
        lost: item.costLost,
        earning: (item.priceSale - (item.costLost + item.furniture?.cost)),
        furniture: item.furniture.name
      })
    });
    this.reportsService.exportReportEarningsXPeriod(sendedItems).subscribe(
      res => {
        console.log("Todo bien");
        const blob1 = new Blob([res], { type: 'text/csv' });
        saveAs(blob1, 'data.csv');
      },
      error => {
        console.log(error);
        const blob1 = new Blob([error], { type: 'text/csv' });
        saveAs(blob1, 'data.csv');
        console.log("Error");
      }
    )
  }

  getReportMinFurnitureXPeriod(){

    let data = {
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '0001-01-01',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date2')?.value : '9999-01-01'
    }
    console.log(data);
    
    
    this.reportsService.getReportMinFurnitureXPeriod(data).subscribe(
      res => {
        console.log(res);
        this.items = res;
      },
      error => {
        console.log(error);
        
      }
    );
  }

  exportReportMinFurnitureXPeriod(){
    let sendedItems:any = [];
    this.items.forEach(item => {
      sendedItems.push({
        codeFurniture: item.code,
        nameFurniture: item.name,
        date: item.creationDate,
        price: item.price,
        amount: item.amount
      })
    });
    this.reportsService.exportReportMinFurnitureXPeriod(sendedItems).subscribe(
      res => {
        console.log("Todo bien");
        const blob1 = new Blob([res], { type: 'text/csv' });
        saveAs(blob1, 'data.csv');
      },
      error => {
        console.log(error);
        const blob1 = new Blob([error], { type: 'text/csv' });
        saveAs(blob1, 'data.csv');
        console.log("Error");
      }
    )
  }

  getReportMaxFurnitureXPeriod(){
    let data = {
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '0001-01-01',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date2')?.value : '9999-01-01'
    }
    console.log(data);
    
    
    this.reportsService.getReportMaxFurnitureXPeriod(data).subscribe(
      res => {
        console.log(res);
        this.items = res;
        console.log(this.items);
      },
      error => {
        console.log(error);
        
      }
    );
  }

  exportReportMaxFurnitureXPeriod(){
    let sendedItems:any = [];
    this.items.forEach(item => {
      sendedItems.push({
        codeFurniture: item.code,
        nameFurniture: item.name,
        date: item.creationDate,
        price: item.price,
        amount: item.amount
      })
    });
    this.reportsService.exportReportMaxFurnitureXPeriod(sendedItems).subscribe(
      res => {
        console.log("Todo bien");
        const blob1 = new Blob([res], { type: 'text/csv' });
        saveAs(blob1, 'data.csv');
      },
      error => {
        console.log(error);
        const blob1 = new Blob([error], { type: 'text/csv' });
        saveAs(blob1, 'data.csv');
        console.log("Error");
      }
    )
  }

  getReportBestSellerXPeriod(){
    let data = {
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '0001-01-01',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date2')?.value : '9999-01-01'
    }
    console.log(data);
    
    
    this.reportsService.getReportBestSellerXPeriod(data).subscribe(
      res => {
        console.log(res);
        this.items = res;
        console.log(this.items);
      },
      error => {
        console.log(error);
        
      }
    );
  }

  exportReportBestSellerXPeriod(){
    let sendedItems:any = [];
    this.items.forEach(item => {
      sendedItems.push({
        idUsuario: item[0],
        salesAmount: item[1],
        name: item[2],
        surname: item[3]
      })
    });
    this.reportsService.exportReportBestSellerXPeriod(sendedItems).subscribe(
      res => {
        console.log("Todo bien");
        const blob1 = new Blob([res], { type: 'text/csv' });
        saveAs(blob1, 'data.csv');
      },
      error => {
        console.log(error);
        const blob1 = new Blob([error], { type: 'text/csv' });
        saveAs(blob1, 'data.csv');
        console.log("Error");
      }
    )
  }

  getReportBestEarnerXPeriod(){
    let data = {
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '0001-01-01',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date2')?.value : '9999-01-01'
    }
    console.log(data);
    
    
    this.reportsService.getReportBestEarnerXPeriod(data).subscribe(
      res => {
        console.log(res);
        this.items = res;
        console.log(this.items);
      },
      error => {
        console.log(error);
        
      }
    );
  }

  exportReportBestEarnerXPeriod(){
    let sendedItems:any = [];
    this.items.forEach(item => {
      sendedItems.push({
        idUsuario: item[0],
        earnings: item[1],
        name: item[2],
        surname: item[3]
      })
    });
    this.reportsService.exportReportBestEarnerXPeriod(sendedItems).subscribe(
      res => {
        console.log("Todo bien");
        const blob1 = new Blob([res], { type: 'text/csv' });
        saveAs(blob1, 'data.csv');
      },
      error => {
        console.log(error);
        const blob1 = new Blob([error], { type: 'text/csv' });
        saveAs(blob1, 'data.csv');
        console.log("Error");
      }
    )
  }
}
