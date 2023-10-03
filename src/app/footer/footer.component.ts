import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { MenuStateService } from '../menu-state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    private scrollService: ScrollService,
    private menuStateService: MenuStateService
  ){}

  scrollTo(section:string) {
    this.scrollService.scrollToElement(section);
  }

  onLegalNoticeClick(): void {
    this.menuStateService.openLegalNotice();
  }
}
