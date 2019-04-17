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
import {WikipediaSearchService} from './wikipedia-effects/wikipedia-search.service';
import {WikipediaEffects} from './wikipedia-effects/wikipedia.effects';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    StoreModule.forFeature('wikipedia-search', actionReducer, { initialState: new WikipediaSearch()}),
    EffectsModule.forFeature([WikipediaEffects])
  ],
  providers: [
    WikipediaSearchService
  ],
  exports: [
    WikipediaContainerComponent
  ],
  declarations: [WikipediaSearchComponent, WikipediaSearchResultsComponent, WikipediaContainerComponent]
})
export class WikipediaModule { }
