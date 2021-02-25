import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { MiguelComponent } from './doctors/miguel/miguel.component';
import { LupitaComponent } from './doctors/lupita/lupita.component';
import { DanielComponent } from './doctors/daniel/daniel.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './shared/carousel/carousel.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services-page', component: ServicesPageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'doctors/miguel', component: MiguelComponent},
  {path: 'doctors/lupita', component: LupitaComponent},
  {path: 'doctors/daniel', component: DanielComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), FontAwesomeModule, MatCarouselModule.forRoot(), BrowserAnimationsModule, 
            AgmCoreModule.forRoot({apiKey: 'AIzaSyBIzpYyzXIQYiaVstaBg34wQ2X0ZLz9jiE'})],
  exports: [RouterModule],
  declarations: [HomeComponent, ServicesPageComponent, MiguelComponent, LupitaComponent, DanielComponent, ContactComponent, CarouselComponent]
})
export class AppRoutingModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faEnvelope);
    library.addIcons(faPhoneAlt);
    library.addIcons(faUser);
    library.addIcons(faMapMarkerAlt);
  }
}
