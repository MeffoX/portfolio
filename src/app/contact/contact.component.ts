import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  @ViewChild('loader') loader!: ElementRef;

  messageSent: boolean = false;
  isActive: boolean = false;


  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    let emailField = this.emailField.nativeElement;    

    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    emailField.disabled = true;
    this.isActive = !this.isActive;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    fd.append('mail', emailField.value);

    //senden  
    await fetch('#',
      {
        method: 'POST',
        body: fd
      }


    ), this.messageSent = true;

    nameField.value = '';
    messageField.value = '';
    sendButton.disable = '';
    emailField.value = '';

    setTimeout(() => {
      this.messageSent = false;

      nameField.disabled = false;
      messageField.disabled = false;
      emailField.disabled = false;
      sendButton.disabled = false;   
      this.isActive = false;
    }, 3000 );

  }
}

