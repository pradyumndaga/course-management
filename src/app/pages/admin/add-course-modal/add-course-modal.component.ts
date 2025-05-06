import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
@Component({
  standalone: true,
  selector: 'app-add-course-modal',
  imports: [MatDialogModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-course-modal.component.html',
  styleUrls: ['./add-course-modal.component.scss']
})
export class AddCourseModalComponent {
  courseDetail = new FormGroup({
    name: new FormControl(''),
    time: new FormControl(''),
    instructor: new FormControl(''),
  })

  constructor(public dialogRef: MatDialogRef<AddCourseModalComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log(this.courseDetail.value);
    this.dialogRef.close(this.courseDetail.value);
  }
}
