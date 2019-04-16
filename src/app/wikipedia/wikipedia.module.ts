import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WikipediaSearchComponent} from './wikipedia-search/wikipedia-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WikipediaSearchResultsComponent} from './wikipedia-search-results/wikipedia-search-results.component';
import {MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports: [
    WikipediaSearchComponent
  ],
  declarations: [WikipediaSearchComponent, WikipediaSearchResultsComponent]
})
export class WikipediaModule { }
