import { Component, OnInit } from '@angular/core';
import { UserprofService } from '../userprof.service';
import { UserChecker } from '../Model/userchecker';
import { Usercreat } from '../Model/Usercreat';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-userprof',
  templateUrl: './create-userprof.component.html',
  styleUrls: ['./create-userprof.component.css']
})
export class CreateUserprofComponent implements OnInit {
  createUserForm: FormGroup;

  constructor(private userservice : UserprofService,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.createUserForm = this.formBuilder.group({
      name: ['',Validators.required],
      phone:['',Validators.required],
      email: ['',Validators.required]
    });
  }

  onSubmit()
  {
    console.log(this.createUserForm.value);
    this.userservice.createUserprof(this.createUserForm.value)
    .subscribe(data =>
      console.log("user is added successfuly"))
      this.router.navigateByUrl('user-details')
  }

}
