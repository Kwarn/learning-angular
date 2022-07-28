import { Component, Input, OnInit, Output } from '@angular/core';
import { SwitchFocusedItemService } from 'src/app/events-service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Course } from 'src/app/types';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course | undefined;
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
    this.switchFocusedItemService.setFocused(this.course?.name);
  }

  onDelete() {
    const input = prompt(
      "Are you sure you want to delete this course? Enter 'delete' to confirm"
    );
    if (this.course?.id) {
      if (input === 'delete') {
        const res = this.courseService.deleteCourse(this.course.id).subscribe();
        return alert(JSON.stringify(res));
      }
      return;
    }
    return alert('Something went wrong..');
  }
}
