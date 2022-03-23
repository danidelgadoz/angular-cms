import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFileInputMultipleComponent } from './example-file-input-multiple.component';

describe('ExampleFileInputMultipleComponent', () => {
  let component: ExampleFileInputMultipleComponent;
  let fixture: ComponentFixture<ExampleFileInputMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFileInputMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFileInputMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
