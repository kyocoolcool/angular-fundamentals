import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcatComponent } from './pcat.component';

describe('PcatComponent', () => {
  let component: PcatComponent;
  let fixture: ComponentFixture<PcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
