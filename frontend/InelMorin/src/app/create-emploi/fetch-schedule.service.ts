import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private apiUrl = 'http://localhost/IntelMorin/backend/API/crudSchedule';

  constructor(private http: HttpClient) { }

  addSchedule(schedule: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/addSchedule.php`, schedule, { headers });
  }

  fetchSchedules(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/fetchSchedules.php`);
  }
}
