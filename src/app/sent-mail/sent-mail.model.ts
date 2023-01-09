export class Email {
    newemail: string;
    subject: string;
    message: string;

    constructor(newemail: string, subject: string, message: string) {
        this.newemail = newemail;
        this.subject = subject;
        this.message = message;
    }
}