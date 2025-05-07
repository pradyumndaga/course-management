import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseComponent } from './course/course.component';
import { CourseService } from 'src/app/services/course.service';

@Component({
  standalone: true,
  selector: 'app-kiosk',
  imports: [CommonModule, CourseComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  showEnrolledCourses = false;

  constructor(private courseService: CourseService) {}

  allCourses = this.courseService.getAllCourses();

  enrolledCourses = this.allCourses.filter((course: any) => course.enrolled);
  availableCourses = this.allCourses.filter((course: any) => !course.enrolled);

  showCourses(enrolled: boolean) {
    this.showEnrolledCourses = enrolled;
  }

  action(event: any) {
    event.enrolled
      ? alert(`${event.name} has been enrolled!`)
      : alert(`${event.name} has been removed!`);
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
