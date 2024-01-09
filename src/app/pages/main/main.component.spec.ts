import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { HeaderComponent } from '../header/header.component';
import { ServiceDescriptionComponent } from '../service-description/service-description.component';
import { LinkSectionComponent } from '../link-section/link-section.component';
import { StatsComponent } from '../stats/stats.component';
import { BenefitSectionComponent } from '../benefit-section/benefit-section.component';
import { LinkBoostComponent } from '../link-boost/link-boost.component';
import { FooterComponent } from '../footer/footer.component';
import { ShortLinksComponent } from '../short-links/short-links.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponent , ShortLinksComponent, HeaderComponent , ServiceDescriptionComponent, LinkSectionComponent, StatsComponent, BenefitSectionComponent , LinkBoostComponent, FooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
