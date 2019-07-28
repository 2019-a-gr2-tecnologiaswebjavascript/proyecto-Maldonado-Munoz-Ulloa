import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasureroPage } from './basurero.page';

describe('BasureroPage', () => {
  let component: BasureroPage;
  let fixture: ComponentFixture<BasureroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasureroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasureroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
