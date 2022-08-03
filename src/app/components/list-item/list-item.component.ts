import { Component, Input, OnInit, Output } from '@angular/core';
import { SwitchFocusedItemService } from 'src/app/events-service';
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
  faTimes = faTimes;
  console = console;

  constructor(
    private switchFocusedItemService: SwitchFocusedItemService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {}

  setOverview() {
    this.switchFocusedItemService.setFocused(this.data?.name);
  }

  onDelete() {
    const input = prompt(
      "Are you sure you want to delete this course? Enter 'delete' to confirm"
    );
    if (this.data?.id) {
      if (input === 'delete') {
        const res = this.courseService.deleteCourse(this.data.id).subscribe();
        return alert(JSON.stringify(res));
      }
      return;
    }
    return alert('Something went wrong..');
  }
}
