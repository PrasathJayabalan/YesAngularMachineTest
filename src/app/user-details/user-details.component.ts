import { Component, OnInit } from '@angular/core';
import { UserprofService } from '../userprof.service';
import { UserChecker } from '../Model/userchecker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  Users: any;
  constructor(private router: Router,private userservice : UserprofService) { }

  ngOnInit() {
    this.userservice.getUsers()
      .subscribe( data => {
        this.Users = data;

      })
  }

  adduser(){
    this.router.navigateByUrl('create-userprof');
  }

}
