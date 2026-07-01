import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PlaceCardComponent } from './shared/components/place-card/place-card.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { CategoryFilterComponent } from './shared/components/category-filter/category-filter.component';
import { HomeComponent } from './features/home/home.component';
import { PlacesComponent } from './features/places/places.component';
import { PlaceDetailComponent } from './features/place-detail/place-detail.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { ReportComponent } from './features/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlaceCardComponent,
    SearchBarComponent,
    CategoryFilterComponent,
    HomeComponent,
    PlacesComponent,
    PlaceDetailComponent,
    AboutComponent,
    ContactComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
