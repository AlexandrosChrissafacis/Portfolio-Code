import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    setTimeout(() => {
      if (this.menuOpen) {
        this.menuOpen = false;
      }
    }, 3000);
  }
}
