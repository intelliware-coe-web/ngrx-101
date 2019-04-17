import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikipediaSearchComponent } from './wikipedia-search.component';
import {MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('WikipediaSearchComponent', () => {
  let component: WikipediaSearchComponent;
  let fixture: ComponentFixture<WikipediaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikipediaSearchComponent ],
      imports: [ NoopAnimationsModule, MatIconModule, MatInputModule, MatFormFieldModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikipediaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
