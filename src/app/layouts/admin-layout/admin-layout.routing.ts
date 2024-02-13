import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { AvisComponent } from '../../pages/avis/avis.component';
import { AnnonceComponent } from '../../pages/annonce/annonce.component';
import { GroupeComponent } from '../../pages/groupe/groupe.component';
import { AccueilComponent } from '../../pages/accueil/accueil.component';

import { ReclamationComponent } from '../../pages/reclamation/reclamation.component';
import { EventListComponent } from 'src/app/pages/event-list/event-list.component';
import { EventComponent } from 'src/app/pages/event/event.component';
import { AvisListComponent } from 'src/app/pages/avis-list/avis-list.component';
import { ReclamationListComponent } from 'src/app/pages/reclamation-list/reclamation-list.component';
import { GroupeListComponent } from 'src/app/pages/groupe-list/groupe-list.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'reclamation',          component: ReclamationListComponent },
    { path: 'addreclamation',          component: ReclamationComponent },
    { path: 'avis',          component: AvisListComponent },
    { path: 'addavis',          component: AvisComponent },
    { path: 'event',          component: EventListComponent },
    { path: 'addEvent',          component: EventComponent },
    { path: 'groupe',          component: GroupeListComponent },
    { path: 'addGroupe',          component: GroupeComponent },
    { path: 'accueil',          component: AccueilComponent },

];
