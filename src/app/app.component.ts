import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <app-wikipedia-container></app-wikipedia-container>
    </div>
  `
})
export class AppComponent {
  title = 'app';
}
