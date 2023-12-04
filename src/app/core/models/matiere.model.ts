import { Professeur } from './professeur.model';

export interface Matiere {
  id: string;
  label: string;
  duree: number;
  professeur: Professeur;
}
