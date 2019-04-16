import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikipediaSearchResultsComponent } from './wikipedia-search-results.component';

describe('WikipediaSearchResultsComponent', () => {
  let component: WikipediaSearchResultsComponent;
  let fixture: ComponentFixture<WikipediaSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikipediaSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikipediaSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
