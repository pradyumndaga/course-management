import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseComponent } from './course/course.component';
import { CourseService } from 'src/app/services/course.service';

@Component({
  standalone: true,
  selector: 'app-kiosk',
  imports: [CommonModule, CourseComponent],
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.scss'],
})
export class KioskComponent {
  showEnrolledCourses = false;

  constructor(private courseService: CourseService) {}

  allCourses = this.courseService.getAllCourses();

  enrolledCourses = this.allCourses.filter((course: any) => course.enrolled);
  availableCourses = this.allCourses.filter((course: any) => !course.enrolled);

  enroll(event: any) {
    alert('You have successfully enrolled in the course!');
  }

  showCourses(enrolled: boolean) {
    this.showEnrolledCourses = enrolled;
  }

  action(event: any) {
    console.log(event);
    this.courseService.updateCourse(event);
    this.allCourses = this.courseService.getAllCourses();
    this.enrolledCourses = this.allCourses.filter(
      (course: any) => course.enrolled
    );
    this.availableCourses = this.allCourses.filter(
      (course: any) => !course.enrolled
    );
  }
}
