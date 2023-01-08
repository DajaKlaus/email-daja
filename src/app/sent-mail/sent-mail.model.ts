declare  var jQuery:  any;

export class Email {
    newemail: string;
    subject: string;
    message: string;

    constructor(newemail: string, subject: string, message: string) {
        this.newemail = newemail;
        this.subject = subject;
        this.message = message;
    }

    expand(): void {
        (function ($) {
            $('.card-footer').show();
        })(jQuery);
    }

    close(): void {
        (function ($) {
              $('.card-footer').hide();
        })(jQuery);
    }
}