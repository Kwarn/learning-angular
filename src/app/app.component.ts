import { Component } from '@angular/core';
import { SwitchFocusedItemService } from './events-service';
import { ListNames } from './types';
import { selectActiveList } from 'src/state/shared/shared.selectors';
import { Store } from '@ngrx/store';
import { setActiveList } from 'src/state/shared/shared.actions';
import { AppState } from 'src/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angluar-students-app';
  activeList$ = this.store.select(selectActiveList);
  console = console;

  constructor(
    public switchFocusedItemService: SwitchFocusedItemService,
    private store: Store<AppState>
  ) {}
  switchActiveList(ListName: ListNames) {
    this.store.dispatch(setActiveList({ listName: ListName }));
  }
}
