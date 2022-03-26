import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/modules/session/services/session.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  opened = false;

  isToggled = true;

  isAdm = true;
  isSale = true;
  isFabr = true;
  
  constructor(private auth: SessionService) { }

  ngOnInit(): void {
    this.isAdmin();
    this.isFabricateman();
    this.isSales();
  }

  toggleSidebar(){
    this.opened = !this.opened; 
  }

  toggledSodeBarAction(){
    this.isToggled = !this.isToggled
  }

  isAdmin(){

    this.auth.isAuthenticatedAdmin().subscribe(
      res => {
        this.isAdm = res;
      },
      error => {
        console.log(error);
        
      }
    );
  }

  isSales(){

    this.auth.isAuthenticatedSales().subscribe(
      res => {
        this.isSale = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  isFabricateman(){

    this.auth.isAuthenticatedFabricate().subscribe(
      res => {
        this.isFabr = res;
      },
      error => {
        console.log(error);
      }
    );

    
  }

}
