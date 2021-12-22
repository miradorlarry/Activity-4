import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  private todo: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      course: [''],
      block: [''],
    });
   }

   logForm(){
    console.log(this.todo.value)
  }

  ngOnInit() {
  }

}
