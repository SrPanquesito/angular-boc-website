import { environment as env } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { MiguelComponent } from './doctors/miguel/miguel.component';
import { LupitaComponent } from './doctors/lupita/lupita.component';
import { DanielComponent } from './doctors/daniel/daniel.component';
import { TheTeamComponent } from './doctors/the-team/the-team.component';
import { ContactComponent } from './contact/contact.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { CardComponent } from './shared/card/card.component';
import { ContactCardComponent } from './shared/contact-card/contact-card.component';
import { CarouselSliderComponent } from './shared/carousel-slider/carousel-slider.component';

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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ReCaptchaModule } from 'angular-recaptcha3';

import { AdvancedComponent } from './services-page/advanced/advanced.component';
import { VeneersComponent } from './services-page/veneers/veneers.component';
import { ZirconiaComponent } from './services-page/zirconia/zirconia.component';
import { Allon4Component } from './services-page/allon4/allon4.component';
import { DentalImplantsComponent } from './services-page/dental-implants/dental-implants.component';
import { RootCanalComponent } from './services-page/root-canal/root-canal.component';
import { DentalAlignersComponent } from './services-page/dental-aligners/dental-aligners.component';
import { BotoxComponent } from './services-page/botox/botox.component';
import { StrategicImplantsComponent } from './services-page/strategic-implants/strategic-implants.component';
import { BannerComponent } from './shared/banner/banner.component';
import { ModelComponent } from './services-page/model/model.component';
import { PricesComponent } from './prices/prices.component';
import { PriceTableComponent } from './shared/price-table/price-table.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesPageComponent},
  {path: 'services/advanced-dentistry', component: AdvancedComponent},
  {path: 'services/veneers', component: VeneersComponent},
  {path: 'services/zirconia', component: ZirconiaComponent},
  {path: 'services/allon4-x', component: Allon4Component},
  {path: 'services/dental-implants', component: DentalImplantsComponent},
  {path: 'services/root-canal', component: RootCanalComponent},
  {path: 'services/dental-aligners', component: DentalAlignersComponent},
  {path: 'services/botox-fillers', component: BotoxComponent},
  {path: 'services/strategic-implants', component: StrategicImplantsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'doctors/miguel', component: MiguelComponent},
  {path: 'doctors/lupita', component: LupitaComponent},
  {path: 'doctors/daniel', component: DanielComponent},
  {path: 'the-team', component: TheTeamComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [
            BrowserModule, RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}), FontAwesomeModule, MatCarouselModule.forRoot(), BrowserAnimationsModule, 
            AgmCoreModule.forRoot({apiKey: env.gmapsKey}), HttpClientModule, MatButtonModule, MatStepperModule, 
            MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule, FormsModule, ReactiveFormsModule, 
            MatSelectModule, MatDatepickerModule, MatNativeDateModule, NgxMaterialTimepickerModule, MatProgressBarModule, MatExpansionModule,
            ReCaptchaModule.forRoot({
                invisible: {
                    sitekey: '6LcaheocAAAAAKmbtALe2uZS2uUoXA8b2cNtlIm5', 
                },
                normal: {
                    sitekey: '6LcaheocAAAAAKmbtALe2uZS2uUoXA8b2cNtlIm5', 
                },
                language: 'en'
            }),
          ],
  exports: [RouterModule],
  declarations: [HomeComponent, ServicesPageComponent, MiguelComponent, LupitaComponent, DanielComponent, ContactComponent, CarouselComponent,
    AdvancedComponent, VeneersComponent, ZirconiaComponent, Allon4Component, DentalImplantsComponent, RootCanalComponent, DentalAlignersComponent, 
    BotoxComponent, BannerComponent, ModelComponent, CardComponent, ContactCardComponent, PricesComponent, PriceTableComponent, StrategicImplantsComponent,
    FaqComponent, TheTeamComponent, CarouselSliderComponent
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
