import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortLinksComponent } from './short-links.component';
import { LinkSectionComponent } from '../link-section/link-section.component';

describe('ShortLinksComponent', () => {
  let component: ShortLinksComponent;
  let fixture: ComponentFixture<ShortLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortLinksComponent , LinkSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});

