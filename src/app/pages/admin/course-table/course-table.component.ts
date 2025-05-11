import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';


@Component({
  standalone: true,
  selector: 'app-course-table',
  imports: [MatTableModule, MatIconModule],
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.scss']
})
export class CourseTableComponent {
  private _courses: any;
  displayedColumns: string[] = ['name', 'time', 'instructor', 'delete'];
  dataSource: any[] = [];

  @Input()
  set courses(value: any) {
    this._courses = value;
    this.dataSource = value;
  }

  get courses(): any {
    return this._courses;
  }

  @Output() deleteCourse = new EventEmitter<any>();

  constructor() {}

  deleteRow(element: any): void {
    this.deleteCourse.emit(element);
  }
}
