import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-wikipedia-search',
  template: `
    <form>
      <mat-form-field>
        <input matInput placeholder="Search..." value="" (keyup)="onKeyUp($event)"/>
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
    </form>
  `,
  styles: [
    `
      mat-form-field {
        width: 100%;
        font-size: 2em;
      }
    `
  ]
})
export class WikipediaSearchComponent {
  @Output()
  readonly search: EventEmitter<string> = new EventEmitter<string>();

  onKeyUp(event: Event) {
    this.search.emit((event.target as HTMLInputElement).value);
  }
}
