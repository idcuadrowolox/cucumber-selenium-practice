import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

export const MENU_ITEMS = [
  {
    url: '/home',
    title: 'Inicio'
  }
];

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  userLogged: string;
  menuItems = MENU_ITEMS;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {
    this.userLogged = this.authService.getUser();
    console.log(this.userLogged);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
