import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salle } from '../models/salle.model';
import { GlobalComponent } from 'src/app/global-component';
const API_URL=GlobalComponent.API_URL;
@Injectable({
  providedIn: 'root',
})
export class SalleService {
  private apiUrl = API_URL+'salles';

  constructor(private http: HttpClient) {}

  getAllSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(this.apiUrl);
  }

  getSalleById(id: string): Observable<Salle> {
    return this.http.get<Salle>(`${this.apiUrl}/${id}`);
  }

  createSalle(salle: Salle): Observable<Salle> {
    return this.http.post<Salle>(this.apiUrl, salle);
  }

  updateSalle(id: string, salle: Salle): Observable<Salle> {
    return this.http.put<Salle>(`${this.apiUrl}/${id}`, salle);
  }

  deleteSalle(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

