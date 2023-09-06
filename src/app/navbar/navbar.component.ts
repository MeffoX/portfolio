import { Component } from '@angular/core';
import { MenuStateService } from '../menu-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  isCopied: boolean = false;
  

  constructor(public menuStateService: MenuStateService) {}

  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
    this.menuStateService.toggleMenu();
    document.body.style.overflow = this.menuStateService.menuState.value ? 'hidden' : 'auto';
  }


  copyToClipboard(element: HTMLParagraphElement) {
    const textToCopy = element.innerHTML;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Text erfolgreich in die Zwischenablage kopiert.');
    }).catch(err => {
      console.error('Fehler beim Kopieren in die Zwischenablage: ', err);
    });
  
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 3000);
  }
}
