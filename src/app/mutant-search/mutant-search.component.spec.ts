import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantSearchComponent } from './mutant-search.component';

describe('MutantSearchComponent', () => {
  let component: MutantSearchComponent;
  let fixture: ComponentFixture<MutantSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutantSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutantSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
