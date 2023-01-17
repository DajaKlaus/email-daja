import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { Email } from './sent-mail.model';
declare  var jQuery:  any;

@Component({
    selector: 'app-sent-mail',
    templateUrl: './sent-mail.component.html',
    styleUrls: ['./sent-mail.component.css'],
})
export class SentMailComponent implements OnInit {
    @HostBinding('attr.class') cssClass = 'card mt-3';
    @Input() mail:Email;
    vis: boolean;
    col: boolean;
    color: string = 'transparent';
    

    constructor() {
        this.mail = new Email('', '', '');
        this.col = false;
        this.vis = false;
    }

    Espandi():Boolean {
        console.log(this.vis);
        this.vis = true;
        return false;
    }

    Chiudi():Boolean {
        console.log(this.vis);
        this.vis = false;
        return false;
    }

    Speciale():Boolean {
        if (this.color === 'transparent') {
            this.color = 'yellow';
            this.vis = false;
        } else {
           this.color = 'transparent';
            this.vis = true;
        }
        return false  
    }

    ngOnInit(){
        this.vis = false
    }
}
