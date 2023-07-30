import { Component } from '@angular/core';
import { Page, appPages, labels } from './page-models/app-pages';
import { ClickEventService } from './click-event.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  appPages: Page[] = appPages;
  labels: string[] = labels;

  constructor(
    public clickEventService: ClickEventService,
  ) {}
}
