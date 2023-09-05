import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  isCopied: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
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
