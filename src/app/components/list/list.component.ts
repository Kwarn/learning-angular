import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Student, Course, ListNames } from 'src/app/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor() {}
  @Output() setOverviewCb = new EventEmitter();
  @Input() focusIdentifier: string | null = null;
  @Input() listData$: Observable<Array<Student | Course>> | undefined;
  @Input() activeListIdentifier: ListNames | undefined;
}
