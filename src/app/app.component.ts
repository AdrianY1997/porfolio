import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  load: boolean = false
  hide: String = ''

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {

        setTimeout(() => {
          this.load = true
          setTimeout(() => {
            this.hide = 'd-none'    
          }, 500);
        }, 5000);
      }
    })
  }
}
