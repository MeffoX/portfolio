import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuStateService } from './menu-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isMenuOpen: boolean = false;
  isLegalNoticeOpen: boolean = false;
  public subscriptions: Subscription = new Subscription();

  constructor(public menuStateService: MenuStateService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.menuStateService.isMenuOpen$.subscribe((state: boolean) => {
        this.isMenuOpen = state;
      })
    );

    this.subscriptions.add(
      this.menuStateService.isLegalNoticeOpen$.subscribe((state: boolean) => {
        this.isLegalNoticeOpen = state;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
