import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  constructor(private scrollService:ScrollService){}


  scrollTo(section:string) {
    this.scrollService.scrollToElement(section);
}
}
