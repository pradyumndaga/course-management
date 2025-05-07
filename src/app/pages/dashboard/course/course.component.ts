import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input() course: any;

  @Output() courseAction = new EventEmitter<any>();

  enroll(event: any) {
    this.courseAction.emit({...this.course, enrolled: event})
  }
}
