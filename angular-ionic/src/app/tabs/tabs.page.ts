import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClickEventService } from '../click-event.service';
import { appPages, Page } from '../page-models/app-pages';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  public tab!: string;
  private activatedRoute = inject(ActivatedRoute);
  appPages: Page[] = appPages;

  constructor(
    public clickEventService: ClickEventService
  ) {}

  ngOnInit() {
    this.tab = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
