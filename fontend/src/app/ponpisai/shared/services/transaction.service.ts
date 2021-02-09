import { Injectable } from '@angular/core';
import { LocalStorageService, NgxResource } from 'ngx-store';

@Injectable({
  providedIn: 'root'
})
export class TransactionService<T> {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  private get settings(): NgxResource<T> {
    return this.localStorageService
      .load(`transaction`)
      .setDefaultValue({});
  }

  remove(): void {
    this.settings.remove();
  }

  save(transaction: T): void {
    this.settings.save(transaction);
  }

  update(transaction: T): void {
    this.settings.save(transaction);
  }

  load(): T {
    // return <T>this.settings.value;
    return this.settings.value as T;
  }
}
