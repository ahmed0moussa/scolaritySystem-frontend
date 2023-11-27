import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
  {
    path: 'Utilisateurs', loadChildren: () => import('./utilisateurs/utilisateurs.module').then(m => m.UtilisateursModule)
  },
  {
    path: 'AffectationdeTaches', loadChildren: () => import('./affectationde-taches/affectationde-taches.module').then(m => m.AffectationdeTachesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
