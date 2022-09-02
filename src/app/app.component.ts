import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1 style="padding-left: 15px;">{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
  `
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
