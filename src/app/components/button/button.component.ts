import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Input() active: boolean | undefined;
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  showCourses() {
    console.log('courses');
  }

  onClick() {
    this.btnClick.emit();
    console.log('button clicked');
  }
}
