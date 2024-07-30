import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateService } from '../../services/state.service';
import { debounceTime } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SuprSendInboxModule } from '@suprsend/ngx-inbox';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, SuprSendInboxModule],
  templateUrl: './header.component.html',
  styles: '',
})
export class HeaderComponent {
  stateService = inject(StateService);
  searchControl = new FormControl('');
  toastrService = inject(ToastrService)

  constructor(private configService : ConfigService) {
  }
  ngOnInit() {

    this.searchControl.valueChanges.pipe(debounceTime(250)).subscribe((value) => {
      this.stateService.searchSubject.next(value || '');
    });

  }
}
