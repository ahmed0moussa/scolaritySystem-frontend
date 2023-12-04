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
  {
    path: 'gestiondesetudiants', loadChildren: () => import('./gestiondesetudiants/gestiondesetudiants.module').then(m => m.GestiondesetudiantsModule)
  },
  {
    path: 'gestiondesmatieres', loadChildren: () => import('./gestiondesmatieres/gestiondesmatieres.module').then(m => m.GestiondesmatieresModule)
  },
  {
    path: 'gestiondesclasses', loadChildren: () => import('./gestiondesclasses/gestiondesclasses.module').then(m => m.GestiondesclassesModule)
  },
  {
    path: 'gestiondesprofesseurs', loadChildren: () => import('./gestiondesprofesseurs/gestiondesprofesseurs.module').then(m => m.GestiondesprofesseursModule)
  },
  {
    path: 'gestiondessalles', loadChildren: () => import('./gestiondessalles/gestiondessalles.module').then(m => m.GestiondessallesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
