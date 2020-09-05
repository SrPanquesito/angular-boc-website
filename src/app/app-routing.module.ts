import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { MiguelComponent } from './doctors/miguel/miguel.component';
import { LupitaComponent } from './doctors/lupita/lupita.component';
import { DanielComponent } from './doctors/daniel/daniel.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services-page', component: ServicesPageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'doctors/miguel', component: MiguelComponent},
  {path: 'doctors/lupita', component: LupitaComponent},
  {path: 'doctors/daniel', component: DanielComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [ServicesPageComponent, MiguelComponent, LupitaComponent, DanielComponent, ContactComponent]
})
export class AppRoutingModule { }
