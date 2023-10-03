import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { MenuStateService } from '../menu-state.service';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit {

  constructor(
    private scrollService: ScrollService,
    private menuStateService: MenuStateService // Injizieren Sie den MenuStateService
  ) {}


  ngOnInit(): void {
    this.scrollService.scrollToTop();
  }


  closeLegalNotice(): void {
    this.menuStateService.closeLegalNotice();
  }
}