import { EventEmitter, Injectable, Output } from '@angular/core';

export enum Events {
  'setCourseOverview',
}

@Injectable({
  providedIn: 'root',
})
export class SwitchFocusedItemService {
  @Output() message$: EventEmitter<string> = new EventEmitter();

  setFocused(name: string | undefined) {
    this.message$.emit(name);
  }
}
