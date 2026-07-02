import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ReportPayload {
  reportId: string;
  fullName: string;
  aadhaar: string;
  phone: string;
  email: string;
  address: string;
  placeId: number;
  visitDate: string;
  visitPurpose: string;
  pdfBase64: string;
  images: string[];
}

@Injectable({ providedIn: 'root' })
export class ReportService {
  private readonly API = 'http://localhost:8090/api/reports';

  constructor(private http: HttpClient) {}

  save(payload: ReportPayload): Observable<{ reportId: string }> {
    return this.http.post<{ reportId: string }>(this.API, payload);
  }
}
