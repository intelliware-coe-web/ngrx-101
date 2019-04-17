import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WikipediaSearchComponent} from './wikipedia-search/wikipedia-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WikipediaSearchResultsComponent} from './wikipedia-search-results/wikipedia-search-results.component';
import {MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {WikipediaContainerComponent} from './wikipedia-container/wikipedia-container.component';
import {StoreModule} from '@ngrx/store';
import {actionReducer} from '../common/ActionReducer';
import {WikipediaSearch} from './wikipedia-search.model';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    StoreModule.forFeature('wikipedia-search', actionReducer, { initialState: new WikipediaSearch()})
  ],
  exports: [
    WikipediaContainerComponent
  ],
  declarations: [WikipediaSearchComponent, WikipediaSearchResultsComponent, WikipediaContainerComponent]
})
export class WikipediaModule { }
