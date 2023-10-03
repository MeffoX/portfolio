import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private scrollService:ScrollService){}


  scrollTo(section:string) {
    this.scrollService.scrollToElement(section);
}

}
