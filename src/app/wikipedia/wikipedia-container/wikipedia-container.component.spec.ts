import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikipediaContainerComponent } from './wikipedia-container.component';

describe('WikipediaContainerComponent', () => {
  let component: WikipediaContainerComponent;
  let fixture: ComponentFixture<WikipediaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikipediaContainerComponent ]
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
