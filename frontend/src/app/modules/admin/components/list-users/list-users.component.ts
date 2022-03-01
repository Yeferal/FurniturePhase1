import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { AdminService } from '../../services/admin.service';

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
  constructor(private adminService: AdminService) {
    this.formFilter = new FormGroup(
      {
        dateStart:new FormControl(''),
        dateEnd:new FormControl(''),
        order:new FormControl(''),
        role:new FormControl(''),
        username:new FormControl(''),
      }
    );
   }

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe(
      res => {
        this.users=res
        
      },
      err => console.log(err)
    )
  }
  
  filterUsers(){}

  removeUser(){
    console.log(this.password);
    
  }
}
