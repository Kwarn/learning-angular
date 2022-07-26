import { Component, Input, OnInit, Output } from '@angular/core';
import { SwitchFocusedItemService } from 'src/app/events-service';
import { Course } from 'src/app/interfaces';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course | undefined;
  @Input() isGrey: boolean | undefined;
  @Input() isFocused: boolean | undefined;

  constructor(private switchFocusedItemService: SwitchFocusedItemService) {}

  ngOnInit(): void {}

  setOverview() {
    this.switchFocusedItemService.setFocused(this.course?.name);
  }
}
