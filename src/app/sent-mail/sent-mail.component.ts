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
    col: boolean;

    constructor() {
        this.mail = new Email('', '', '');
        this.col = false;
    }

    Espandi():Boolean {
        this.mail.expand();
        return false;
    }

    Chiudi():Boolean {
        this.mail.close();
        return false;
    }

    Speciale():Boolean {
        if (this.col == false) {
            (function ($) {
                $('.card-footer').css({
                    "background-image": "linear-gradient(rgba(252, 219, 3, 0.4), rgba(252, 219, 3, 0.4))"
                });
            })(jQuery);
            this.col = true;
        } else if (this.col = true) {
            (function ($) {
                $('.card-footer').css({
                    "background-image": "linear-gradient(rgba(248, 248, 248, 255), rgba(248, 248, 248, 255))"
                });
            })(jQuery);
            this.col = false;
        }
        return false;
    }

    ngOnInit(){
        (function ($) {
            $(document).ready(function(){
                $('.card-footer').hide();
            });
        })(jQuery);
    }
}
