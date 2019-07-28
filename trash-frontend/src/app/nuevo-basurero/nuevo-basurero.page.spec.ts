import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoBasureroPage } from './nuevo-basurero.page';

describe('NuevoBasureroPage', () => {
  let component: NuevoBasureroPage;
  let fixture: ComponentFixture<NuevoBasureroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoBasureroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoBasureroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
