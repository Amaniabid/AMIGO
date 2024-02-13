import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  private apiUrl = 'http://localhost:8097/admin/stats';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): { [header: string]: string } {
    const authToken = localStorage.getItem('token') || '';
    return { Authorization: `Bearer ${authToken}` };
  }

  getTotalPublications(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/publications`, { headers: this.getAuthHeaders() });
  }

  getTotalUsersWithUserRole(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/usersWithUserRole`, { headers: this.getAuthHeaders() });
  }

  getReclamationsEnAttenteCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/reclamationsEnAttente`, { headers: this.getAuthHeaders() });
  }

  getReclamationsTermineeCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/reclamationsTerminee`, { headers: this.getAuthHeaders() });
  }
}
