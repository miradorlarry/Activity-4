import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private todo: FormGroup;
  
  constructor(private route: Router, private formBuilder: FormBuilder ) { 
    this.todo = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  logForm(){
    console.log(this.todo.value)
  }

  goToSignUp(){
    this.route.navigate(['/signup'])
  }

  ngOnInit() {
  }

}
