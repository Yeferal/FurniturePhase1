import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private cookieService: CookieService, public router: Router) { }

  ngOnInit(): void {
    this.appSearch=true
  }

  @Input() appSearch:boolean

  logOut(){
    this.cookieService.deleteAll();
    this.cookieService.delete("tokenfurniture")
    this.cookieService.delete("tokenfurniture")
    this.router.navigate(['login']);
  }
}
