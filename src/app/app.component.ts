import { Component } from '@angular/core';
import { Email } from './sent-mail/sent-mail.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    emails:Email[];

    constructor() {
        this.emails = [
        new Email('Example1@gmail.com', 'Subject Example1', 'This is an example')
        ];
    }

    addEmail(newemail:HTMLInputElement, subject:HTMLInputElement, message:HTMLTextAreaElement) {
        console.log(`Adding mail: ${newemail.value}, subject of the mail: ${subject.value} and the message: ${message.value}`);
        this.emails.push(new Email(newemail.value, subject.value, message.value));
        newemail.value = '';
        subject.value = '';
        message.value = '';
        return false;
    }
} 
