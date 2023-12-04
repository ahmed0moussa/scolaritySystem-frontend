import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matiere } from '../models/matiere.model';
import { GlobalComponent } from 'src/app/global-component';
const API_URL=GlobalComponent.API_URL;

@Injectable({
  providedIn: 'root',
})
export class MatiereService {
  private apiUrl = API_URL+'matieres';

  constructor(private http: HttpClient) {}

  getAllMatieres(): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(this.apiUrl);
  }

  getMatiereById(id: string): Observable<Matiere> {
    return this.http.get<Matiere>(`${this.apiUrl}/${id}`);
  }

  createMatiere(matiere: Matiere): Observable<Matiere> {
    return this.http.post<Matiere>(this.apiUrl, matiere);
  }

  updateMatiere(id: string, matiere: Matiere): Observable<Matiere> {
    return this.http.put<Matiere>(`${this.apiUrl}/${id}`, matiere);
  }

  deleteMatiere(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

