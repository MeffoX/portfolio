import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuStateService {

  public menuState = new BehaviorSubject<boolean>(false);
  menuState$ = this.menuState.asObservable();

  toggleMenu() {
    this.menuState.next(!this.menuState.value);
  }

  constructor() { }
}
