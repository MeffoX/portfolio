import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('sendButton') sendButton!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;

  messageSent: string = '';
  buttonText: string = 'Send message';
  isActive: boolean = false; // Zum Steuern des visuellen Effekts des Buttons
  
  constructor() {}
  

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    let emailField = this.emailField.nativeElement;
    
    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    emailField.disabled = true;
    this.isActive = true;
    
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    fd.append('mail', emailField.value);
    

    try {
      this.buttonText = 'Sending...';
      await fetch('https://stefanroth.dev/send_mail/send_mail.php',
        {
          method: 'POST',
          body: fd
        }
      );
      this.messageSent = 'Message successfully sent!';
    } catch (error) {
      this.messageSent = 'Sorry! There seems to have been an error :(';
    }
    

    nameField.value = '';
    messageField.value = '';
    emailField.value = '';
    

    setTimeout(() => {
      this.messageSent = '';
      
      nameField.disabled = false;
      messageField.disabled = false;
      emailField.disabled = false;
      sendButton.disabled = false;
      
      this.isActive = false;
      this.buttonText = 'Send message';
    }, 1500);
  }
}
