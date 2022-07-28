import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/types';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css'],
})
export class CourseOverviewComponent implements OnInit {
  @Input() course: Course | null = null;

  constructor() {}

  ngOnInit(): void {}
}
