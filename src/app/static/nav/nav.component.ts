import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  show: boolean = false;

  toggleMenu() {
    this.show = !this.show;
  }

  scrollTo(s: String) {
    this.toggleMenu();

    const section = document.querySelector(`#${s}`);
    if (section) section.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
}
