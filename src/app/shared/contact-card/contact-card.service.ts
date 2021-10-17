import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactCardService {
  
  constructor(private http: HttpClient) { }

  getTest(): Observable<any> {
    return this.http.get(env.api + '/test');
  }

  postFileUpload(payload: FormData): Observable<any> {
    return this.http.post<any>(env.api + '/file-upload', payload, {
      reportProgress: true,
      observe: 'events'
    });
  }

  postSendEmail(payload: Object): Observable<any> {
    return this.http.post<any>(env.api + '/email', payload);
  }
}
