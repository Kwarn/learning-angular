import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MOCK_STUDENTS } from 'src/app/mock-students';
import { Student, Course } from 'src/app/interfaces';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.css'],
})
export class SectionContainerComponent implements OnInit {
  @Output() setOverviewCb = new EventEmitter();
  @Input() dataIdentifier: 'students' | 'courses' | null = null;
  @Input() students: Student[] | null | undefined = null;
  @Input() courses: Course[] | null | undefined = null;
  @Input() focusIdentifier: string | null = null;

  constructor() {}

  ngOnInit(): void {}
}
