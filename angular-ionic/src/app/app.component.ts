import { Component } from '@angular/core';
import { Page, appPages, labels } from './page-models/app-pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  appPages: Page[] = appPages;
  labels: string[] = labels;

  constructor() {}
}
