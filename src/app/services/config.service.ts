// src/app/services/config.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  get workspaceKey(): string {
    return '3XS8CrMemay76qceSQ4B';
  }

  get workspaceSecret(): string {
    return 'SS.WSS.o0NvKJAmvF7s5Jr1fGEVLuqqeIqZ7BJoPKrFxSGy';
  }

  get distinctId(): string {
    return 'pathannehan26@gmail.com';
  }
}
