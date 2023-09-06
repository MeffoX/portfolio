import { Component, OnDestroy } from '@angular/core';
import { MenuStateService } from '../menu-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartScreenComponent implements OnDestroy {
  isMenuOpen = false;
  public subscription: Subscription;

  constructor(public menuStateService: MenuStateService) {
    this.subscription = this.menuStateService.menuState$.subscribe(
      state => this.isMenuOpen = state
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
