import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { LinkSectionComponent } from './pages/link-section/link-section.component';
import { StatsComponent } from './pages/stats/stats.component';
import { BenefitSectionComponent } from './pages/benefit-section/benefit-section.component';
import { LinkBoostComponent } from './pages/link-boost/link-boost.component';
import { ServiceDescriptionComponent } from './pages/service-description/service-description.component';
import { ShortLinksComponent } from './pages/short-links/short-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LinkSectionComponent,
    StatsComponent,
    BenefitSectionComponent,
    LinkBoostComponent,
    ServiceDescriptionComponent,
    ShortLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent, ShortLinksComponent,],
  providers: [ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
