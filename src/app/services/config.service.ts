// config.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public workspaceKey: string = 'j0gNn0uaK0gR56rcdHWq';
  public workspaceSecret: string = 'SS.WSS.J6gsAr6dILkKreRdN1zIIRN6BN07sae0fWXbKATo';
  // public subscriberId: string = 'nehan26'; // Replace with dynamic value

  constructor(private http: HttpClient) {}

  // getSubscriberId(distinctId: string): Observable<{ subscriber_id: string }> {
  //   return this.http.post<{ subscriber_id: string }>('/api/generate-subscriber-id', { distinctId });
  // }
}
