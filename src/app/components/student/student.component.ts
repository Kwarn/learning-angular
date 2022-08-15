import { Component, Input, OnInit } from '@angular/core';
import { ListNames, Student } from '../../types';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input() studentData: Student | undefined | null;
  @Input() activeList: ListNames | undefined;
  constructor() {}

  ngOnInit(): void {}
}
