import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {provideToastr} from 'ngx-toastr';
import { SuprSendInboxModule, SuprSendInboxService } from '@suprsend/ngx-inbox';
import { ConfigService } from './services/config.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),provideToastr(),
      importProvidersFrom(SuprSendInboxModule),
    {
      provide: SuprSendInboxService,
      useFactory: (configService: ConfigService) => new SuprSendInboxService({
        workspaceKey: configService.workspaceKey,
        workspaceSecret: configService.workspaceSecret
      }),
      deps: [ConfigService]
    }
  ],
};
