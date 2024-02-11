import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByAreaComponent } from './sort-by-area.component';

describe('SortByAreaComponent', () => {
  let component: SortByAreaComponent;
  let fixture: ComponentFixture<SortByAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortByAreaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SortByAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
