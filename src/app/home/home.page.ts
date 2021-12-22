import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private route: Router) {}
  
  goToSignUp(){
    this.route.navigate(['/signup'])
  }

  goToLogin(){
    this.route.navigate(['/login'])
  }

  goToProfile(){
    this.route.navigate(['/profile'])
  }
}
