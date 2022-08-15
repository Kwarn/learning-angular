import { Component, Input, OnInit } from '@angular/core';
import { Course, ListNames, ListTypes } from '../../types';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  @Input() courseData: Course | undefined | null;
  @Input() activeList: ListNames | undefined;
  constructor() {}

  ngOnInit(): void {}
}
