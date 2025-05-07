import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseComponent } from "../dashboard/course/course.component";
import { CourseService } from 'src/app/services/course.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddCourseModalComponent } from './add-course-modal/add-course-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [CommonModule, FormsModule, CourseTableComponent, MatDialogModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  searchText = '';
  courses: any[] = [];
  dataSource: any[] = [];

  constructor(private courseService: CourseService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.courses = this.courseService.getAllCourses();
    this.dataSource = this.courses;
  }

  openAddCourseModal() {
    const dialogRef = this.dialog.open(AddCourseModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courseService.addCourse(result);
        this.getAllCourses();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = this.searchText;
    this.dataSource = this.courses.filter(course => course.name.toLowerCase().includes(filterValue.toLowerCase()));
  }

  deleteRow(element: any): void {
    this.courseService.deleteCourse(element);
    this.getAllCourses();
  }
}