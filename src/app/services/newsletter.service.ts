import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formResponse } from '../interfaces/form.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  private endpointUrl = '';
  constructor(private http: HttpClient) {}

  sendData(name: string, email: string): Observable<formResponse> {
    const data = { name, email };

    return this.http.post<formResponse>(this.endpointUrl, data);
  }
}
