import { ScrollService } from './../scroll.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartScreenComponent {

  constructor(private scrollService:ScrollService){}


  scrollTo(section:string) {
    this.scrollService.scrollToElement(section);
}

}
