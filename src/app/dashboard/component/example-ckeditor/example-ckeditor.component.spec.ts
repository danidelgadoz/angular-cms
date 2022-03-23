import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCkeditorComponent } from './example-ckeditor.component';

describe('ExampleCkeditorComponent', () => {
  let component: ExampleCkeditorComponent;
  let fixture: ComponentFixture<ExampleCkeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleCkeditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCkeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
