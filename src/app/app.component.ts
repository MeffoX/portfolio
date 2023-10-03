import { Component } from '@angular/core';
import { MenuStateService } from './menu-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  isMenuOpen: boolean = false;

  constructor(public menuStateService: MenuStateService) {
    this.menuStateService.menuState$.subscribe(state => {
      this.isMenuOpen = state;
    });
  }
}
