import { Matiere } from './matiere.model';
import { Etudiant } from './etudiant.model';

export interface Classe {
  id: string;
  nomClasse: string;
  matieres: Matiere[];
  etudiants: Etudiant[];
}
