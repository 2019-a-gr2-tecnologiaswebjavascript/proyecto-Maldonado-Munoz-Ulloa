import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearBasureroPage } from './modal-crear-basurero.page';

describe('ModalCrearBasureroPage', () => {
  let component: ModalCrearBasureroPage;
  let fixture: ComponentFixture<ModalCrearBasureroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCrearBasureroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrearBasureroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
