import { Component } from '@angular/core';

@Component({
  selector: 'contact-page',
  template: `
    <section class="contact-me-section">
      <div class="portrait-photo"></div>
      <div class="forms-container">
        <div><input placeholder="Message title" /></div>
        <div><textarea placeholder="Write your message here"></textarea></div>
        <div class="button-container"><button>Send</button></div>
      </div>
      <div class="contact-details">
        <address>
          694 Memory Lane<br />
          Hopkins Park<br />
          California<br />
        </address>
        <p>
          <b>Email:</b> faksyfoo@example.com<br />
          <b>Phone:</b> 020 7946 0680<br />
        </p>
      </div>      
    </section>`
})
export class ContactPageComponent {
}