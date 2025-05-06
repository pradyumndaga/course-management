import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private localStorageKey = 'courses';

  constructor() {
    this.initializeDefaultCourses();
  }

  private initializeDefaultCourses() {
    const existingCourses = JSON.parse(
      localStorage.getItem(this.localStorageKey) || '[]'
    );
    if (existingCourses?.length === 0) {
      const defaultCourses = [
        {
          id: 1,
          name: 'Angular Development',
          imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
          time: '10hrs',
          instructor: 'John Doe',
          enrolled: true
        },
        {
          id: 2,
          name: 'React Development',
          imgUrl: 'https://reactjs.org/logo-og.png',
          time: '6hrs',
          instructor: 'Jane Smith',
          enrolled: false
        },
        {
          id: 3,
          name: 'Vue.js Development',
          imgUrl: 'https://vuejs.org/images/logo.png',
          time: '8hrs',
          instructor: 'Alice Johnson',
          enrolled: false
        },
        {
          id: 4,
          name: 'Node.js Development',
          imgUrl: 'https://nodejs.org/static/images/logo.svg',
          time: '12hrs',
          instructor: 'Bob Brown',
          enrolled: true
        },
        {
          id: 5,
          name: 'Django Development',
          imgUrl:
            'https://www.djangoproject.com/m/img/logos/django-logo-negative.png',
          time: '2hrs',
          instructor: 'Charlie Green',
          enrolled: false
        },
      ];
      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify(defaultCourses)
      );
    }
  }

  getAllCourses() {
    const courses = localStorage.getItem(this.localStorageKey);
    return courses ? JSON.parse(courses) : [];
  }

  addCourse(course: any) {
    const courses = this.getAllCourses();
    const newCourse = {
      ...course,
      id: courses.length ? Math.max(...courses.map((c: any) => c.id)) + 1 : 1,
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      enrolled: false,
    };
    courses.push(newCourse);
    localStorage.setItem(this.localStorageKey, JSON.stringify(courses));
  }

  deleteCourse(course: any) {
    const courses = this.getAllCourses();
    const updatedCourses = courses.filter((c: any) => c.id !== course.id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(updatedCourses));
  }

  updateCourse(course: any) {
    const courses = this.getAllCourses();
    const updatedCourses = courses.map((c: any) => {
      if (c.id === course.id) {
        return course;
      }
      return c;
    });
    localStorage.setItem(this.localStorageKey, JSON.stringify(updatedCourses));
  }
}
