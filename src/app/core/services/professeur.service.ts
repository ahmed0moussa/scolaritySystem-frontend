import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professeur } from '../models/professeur.model';
import { GlobalComponent } from 'src/app/global-component';
const API_URL=GlobalComponent.API_URL;
@Injectable({
  providedIn: 'root',
})
export class ProfesseurService {
  private apiUrl = API_URL+'professeurs';

  constructor(private http: HttpClient) {}

  getAllProfesseurs(): Observable<Professeur[]> {
    return this.http.get<Professeur[]>(this.apiUrl);
  }

  getProfesseurById(id: string): Observable<Professeur> {
    return this.http.get<Professeur>(`${this.apiUrl}/${id}`);
  }

  createProfesseur(professeur: Professeur): Observable<Professeur> {
    return this.http.post<Professeur>(this.apiUrl, professeur);
  }

  updateProfesseur(id: string, professeur: Professeur): Observable<Professeur> {
    return this.http.put<Professeur>(`${this.apiUrl}/${id}`, professeur);
  }

  deleteProfesseur(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

