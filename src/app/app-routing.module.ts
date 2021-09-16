import { environment as env } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { MiguelComponent } from './doctors/miguel/miguel.component';
import { LupitaComponent } from './doctors/lupita/lupita.component';
import { DanielComponent } from './doctors/daniel/daniel.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { CardComponent } from './shared/card/card.component';
import { ContactCardComponent } from './shared/contact-card/contact-card.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { AgmCoreModule } from '@agm/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select'; 

import { AestheticComponent } from './services-page/aesthetic/aesthetic.component';
import { VeneersComponent } from './services-page/veneers/veneers.component';
import { ZirconiaComponent } from './services-page/zirconia/zirconia.component';
import { Allon4Component } from './services-page/allon4/allon4.component';
import { DentalImplantsComponent } from './services-page/dental-implants/dental-implants.component';
import { RootCanalComponent } from './services-page/root-canal/root-canal.component';
import { SedationComponent } from './services-page/sedation/sedation.component';
import { OrofacialComponent } from './services-page/orofacial/orofacial.component';
import { BannerComponent } from './shared/banner/banner.component';
import { ModelComponent } from './services-page/model/model.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesPageComponent},
  {path: 'services/aesthetic', component: AestheticComponent},
  {path: 'services/veneers', component: VeneersComponent},
  {path: 'services/zirconia', component: ZirconiaComponent},
  {path: 'services/allon4', component: Allon4Component},
  {path: 'services/dental-implants', component: DentalImplantsComponent},
  {path: 'services/root-canal', component: RootCanalComponent},
  {path: 'services/sedation', component: SedationComponent},
  {path: 'services/orofacial', component: OrofacialComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'doctors/miguel', component: MiguelComponent},
  {path: 'doctors/lupita', component: LupitaComponent},
  {path: 'doctors/daniel', component: DanielComponent}
];

@NgModule({
  imports: [
            BrowserModule, RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}), FontAwesomeModule, MatCarouselModule.forRoot(), BrowserAnimationsModule, 
            AgmCoreModule.forRoot({apiKey: env.gmapsKey}), MatButtonModule, MatStepperModule, MatCardModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatSelectModule
          ],
  exports: [RouterModule],
  declarations: [HomeComponent, ServicesPageComponent, MiguelComponent, LupitaComponent, DanielComponent, ContactComponent, CarouselComponent,
    AestheticComponent, VeneersComponent, ZirconiaComponent, Allon4Component, DentalImplantsComponent, RootCanalComponent, SedationComponent, 
    OrofacialComponent, BannerComponent, ModelComponent, CardComponent, ContactCardComponent
  ]
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
