import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PlacesComponent } from './features/places/places.component';
import { PlaceDetailComponent } from './features/place-detail/place-detail.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { ReportComponent } from './features/report/report.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { FavoritesComponent } from './features/favorites/favorites.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '',          component: HomeComponent },
  { path: 'places',   component: PlacesComponent },
  { path: 'place/:id', component: PlaceDetailComponent },
  { path: 'about',    component: AboutComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'report',   component: ReportComponent },
  { path: 'login',    component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
