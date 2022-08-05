import { Component } from '@angular/core';
import { ListNames } from './types';
import { selectActiveList } from 'src/state/shared/shared.selectors';
import { Store } from '@ngrx/store';
import { setActiveList } from 'src/state/shared/shared.actions';
import { AppState } from 'src/state/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angluar-students-app';
  activeList$: Observable<ListNames> | undefined;
  console = console;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.activeList$ = this.store.select(selectActiveList);
  }

  switchActiveList(ListName: ListNames) {
    this.store.dispatch(setActiveList({ listName: ListName }));
  }
}
