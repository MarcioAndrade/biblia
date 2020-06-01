import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CaixaPromessasComponent } from './caixa-promessas/caixa-promessas.component';
import { AboutComponent } from './about/about.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'caixaPromessas', component: CaixaPromessasComponent }
];