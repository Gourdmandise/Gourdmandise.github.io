import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InformationsComponent } from './components/informations/informations.component';
import { PassionsListComponent } from './components/passions-list/passions-list.component';
import { OrigamiComponent } from './components/passions/origami/origami.component';
import { TennisComponent } from './components/passions/tennis/tennis.component';
import { GamingComponent } from './components/passions/gaming/gaming.component';
import { ManhwaComponent } from './components/passions/manhwa/manhwa.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'informations', component: InformationsComponent },
  { path: 'passions', component: PassionsListComponent },
  { path: 'origami', component: OrigamiComponent },
  { path: 'tennis', component: TennisComponent },
  { path: 'gaming', component: GamingComponent },
  { path: 'manhwa', component: ManhwaComponent }
];
