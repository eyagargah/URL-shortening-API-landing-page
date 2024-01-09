import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSectionComponent } from './link-section.component';
import { ShortLinksComponent } from '../short-links/short-links.component';

describe('LinkSectionComponent', () => {
  let component: LinkSectionComponent;
  let fixture: ComponentFixture<LinkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkSectionComponent , ShortLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
