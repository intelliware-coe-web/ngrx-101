import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WikipediaContainerComponent} from './wikipedia-container.component';
import {MockComponent} from 'ng-mocks';
import {WikipediaSearchComponent} from '../wikipedia-search/wikipedia-search.component';
import {WikipediaSearchResultsComponent} from '../wikipedia-search-results/wikipedia-search-results.component';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {WikipediaSearch} from '../wikipedia-search.model';
import {Store} from '@ngrx/store';

describe('WikipediaContainerComponent', () => {
  let component: WikipediaContainerComponent;
  let fixture: ComponentFixture<WikipediaContainerComponent>;
  let store: MockStore<WikipediaSearch>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WikipediaContainerComponent,
        MockComponent(WikipediaSearchComponent),
        MockComponent(WikipediaSearchResultsComponent)
      ],
      providers: [
        provideMockStore<WikipediaSearch>({initialState: new WikipediaSearch()})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikipediaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
