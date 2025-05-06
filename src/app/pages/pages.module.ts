import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CourseComponent } from './kiosk/course/course.component';
import { CourseTableComponent } from './admin/course-table/course-table.component';
import { AddCourseModalComponent } from './admin/add-course-modal/add-course-modal.component';


@NgModule({
  declarations: [
    CourseComponent,
    CourseTableComponent,
    AddCourseModalComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
