import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBoostComponent } from './link-boost.component';

describe('LinkBoostComponent', () => {
  let component: LinkBoostComponent;
  let fixture: ComponentFixture<LinkBoostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkBoostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
