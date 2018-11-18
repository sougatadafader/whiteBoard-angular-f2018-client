import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Course} from "../models/course.model.client";
import {CourseServiceClient} from "../services/CourseServiceClient";

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private myservice: CourseServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(  params => this.loadCourse(params['courseId']));
  }
  course: Course = new Course();
  loadCourse(courseId)
  {
    this.myservice.findCourseById(courseId)
      .then(course => this.course = course);
  }

  ngOnInit() {
  }

}
