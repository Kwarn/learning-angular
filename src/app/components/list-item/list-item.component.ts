import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Course, Student } from 'src/app/types';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() data: Student | Course | undefined;
  @Input() isGrey: boolean | undefined;
  @Input() isFocused: boolean | undefined;
  @Input() dataIdentifier: string | undefined | null;
  @Output() onDeleteClick = new EventEmitter();
  faTimes = faTimes;
  console = console;

  constructor() {}

  ngOnInit(): void {}

  setOverview() {}

  onDelete() {
    const input = prompt(
      `Are you sure you want to delete this ${this.dataIdentifier}? Enter 'delete' to confirm`
    );

    if (input === 'delete') {
      this.onDeleteClick.emit();
    }
    return;
  }
}
