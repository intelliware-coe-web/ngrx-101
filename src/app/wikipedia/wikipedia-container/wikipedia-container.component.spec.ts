import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WikipediaContainerComponent} from './wikipedia-container.component';
import {MockComponent} from 'ng-mocks';
import {WikipediaSearchComponent} from '../wikipedia-search/wikipedia-search.component';
import {WikipediaSearchResultsComponent} from '../wikipedia-search-results/wikipedia-search-results.component';

describe('WikipediaContainerComponent', () => {
  let component: WikipediaContainerComponent;
  let fixture: ComponentFixture<WikipediaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WikipediaContainerComponent,
        MockComponent(WikipediaSearchComponent),
        MockComponent(WikipediaSearchResultsComponent)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikipediaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
