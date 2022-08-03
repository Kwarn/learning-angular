import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student, Course } from 'src/app/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Output() setOverviewCb = new EventEmitter();
  @Input() listData: Array<Student | Course> | null = null;
  @Input() focusIdentifier: string | null = null;

  constructor() {}

  ngOnInit(): void {}
}
