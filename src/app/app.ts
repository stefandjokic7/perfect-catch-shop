import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Toast } from './shared/components/toast/toast';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports:[RouterOutlet, RouterModule, Toast]
})
export class App {
  protected readonly title = signal('perfect-catch');
  activeLink = '';

  menuActive: boolean = false;

  setActive(link: string) {
    this.activeLink = link;
    this.menuActive = false; // zatvori dropdown
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
