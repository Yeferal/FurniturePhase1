import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Page } from 'src/app/core/models/page';
import { User } from 'src/app/core/models/user';
import { AdminService } from '../../services/admin.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users: User[] = [];
  formFilter: FormGroup;
  date = new Date().toISOString() ; 
  password : string ="";
  constructor(private adminService: AdminService,private _userService: UserService) {
    this.formFilter = new FormGroup(
      {
        //dateStart:new FormControl(''),
        //dateEnd:new FormControl(''),
        order:new FormControl(''),
        role:new FormControl(''),
        username:new FormControl(''),
      }
    );
   }

  ngOnInit(): void {
    this.getUsers()
  }
  
  filterUsers(){
    console.log(this.formFilter.value);
    
    this._userService.getFilterAllUsers(this.page,this.formFilter.value.username,this.formFilter.value.role).subscribe(
      res => {
        this.users = res.content;
        this.paginate = res;
        console.log(res.content);
        this.typeSearch = 1;
      },
      err => {
        console.log(err);
      }
    )

  }

  getUsers(){
    this._userService.getAllUsers(this.page).subscribe(
      res => {
        this.users = res.content;
        this.paginate = res;
        console.log(res.content);
      },
      err => {
        console.log(err);
      }
    )
  }

  selectdUser:any;
  showMessage:number=0;
  message="";
  removeUser(){
    this._userService.deleteUser(this.selectdUser).subscribe(
      result => {
        this.users = this.users.filter(us => us.id!=this.selectdUser);
        this.message="Usuario eliminado"
        this.showMessage=1
      },
      err => {
        this.message = "Error al eliminar usuario, intente de nuevo"
        this.showMessage=2
      }
    )
    
  }
  //yef
  prevPage(){
    this.page = this.page - 1;
    if (this.typeSearch == 0) {
      this.getUsers();
    } else {
      this.filterUsers();
    }
  }
  counter(i: number) {
    return new Array(i);
  }
  setPage(i: number){
    this.page = i;
    if (this.typeSearch == 0) {
      this.getUsers();
    } else {
      this.filterUsers();
    }
  }
  nextPage(){
    this.page = this.page + 1;
    if (this.typeSearch == 0) {
      this.getUsers();
    } else {
      this.filterUsers();
    }
  }
  page = 0;
  paginate: Page;
  typeSearch:number = 0;
}
