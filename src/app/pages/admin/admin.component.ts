import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseComponent } from "../kiosk/course/course.component";
import { CourseService } from 'src/app/services/course.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddCourseModalComponent } from './add-course-modal/add-course-modal.component';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [FormsModule, CourseTableComponent, MatDialogModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  searchText = '';
  courses = [
    {
      name: 'Angular Development',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      time: '10:00 AM - 12:00 PM',
      instructor: 'John Doe',
    },
    {
      name: 'React Development',
      imgUrl: 'https://reactjs.org/logo-og.png',
      time: '1:00 PM - 3:00 PM',
      instructor: 'Jane Smith',
    },
    {
      name: 'Vue.js Development',
      imgUrl: 'https://vuejs.org/images/logo.png',
      time: '4:00 PM - 6:00 PM',
      instructor: 'Alice Johnson',
    },
    {
      name: 'Node.js Development',
      imgUrl: 'https://nodejs.org/static/images/logo.svg',
      time: '7:00 PM - 9:00 PM',
      instructor: 'Bob Brown',
    },
    {
      name: 'Django Development',
      imgUrl: 'https://www.djangoproject.com/m/img/logos/django-logo-negative.png',
      time: '10:00 AM - 12:00 PM',
      instructor: 'Charlie Green',
    }

  ]

  dataSource = this.courses;

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