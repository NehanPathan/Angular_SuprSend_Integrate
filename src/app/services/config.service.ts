// config.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { suprsend } from '../suprsend-config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public workspaceKey: string = 'j0gNn0uaK0gR56rcdHWq';
  public workspaceSecret: string = 'SS.WSS.J6gsAr6dILkKreRdN1zIIRN6BN07sae0fWXbKATo';
  // public subscriberId: string = 'nehan26'; // Replace with dynamic value

  constructor(private http: HttpClient) {
    suprsend.init(
      'j0gNn0uaK0gR56rcdHWq',
      'SS.WSS.J6gsAr6dILkKreRdN1zIIRN6BN07sae0fWXbKATo'
    );
  }

  // Example method to send a custom event
  sendEvent(eventName: string, properties?: any) {
    suprsend.track(eventName, properties);
  }
  // Method to handle notification display
  showNotifications() {
    suprsend.web_push.register_push();
  }
}
