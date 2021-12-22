import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private todo: FormGroup;

  constructor(private route: Router,  private formBuilder: FormBuilder) { 
    this.todo = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      username: [''],
      password: [''],
    });
  }

  logForm(){
    console.log(this.todo.value)
  }
  ngOnInit() {
  }


}
