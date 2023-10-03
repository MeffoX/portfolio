import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuStateService {
  menuState: any;
  public isLegalNoticeOpen$ = new BehaviorSubject<boolean>(false);
  public isMenuOpen$ = new BehaviorSubject<boolean>(false)


  get legalNoticeOpen() {
    return this.isLegalNoticeOpen$.asObservable();
  }


  toggleMenu(): void {
    this.isMenuOpen$.next(!this.isMenuOpen$.value);
  }


  openLegalNotice(): void {
    this.isLegalNoticeOpen$.next(true);
  }


  closeLegalNotice(): void {
    this.isLegalNoticeOpen$.next(false);
  }
}