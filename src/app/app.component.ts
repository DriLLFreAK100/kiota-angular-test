import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';

import type { InventoryGetResponse as Inventory } from '../generated/store/inventory';
import { openApiClient } from '../utils/openapi.util';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public inventory = signal<Inventory | undefined>(undefined);

  public ngOnInit() {
    this._init()
  }

  private async _init() {
    this.inventory.set(
      await openApiClient.store.inventory.get(),
    );
  }
}
