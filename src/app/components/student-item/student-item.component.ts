import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/types';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css'],
})
export class StudentItemComponent implements OnInit {
  @Input() student: Student | undefined;
  @Input() isGrey: boolean | undefined;

  constructor() {
  }

  ngOnInit(): void {}
}
