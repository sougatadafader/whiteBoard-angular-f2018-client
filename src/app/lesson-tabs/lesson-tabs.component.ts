import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonServiceClient} from "../services/LessonServiceClient";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private myservice:LessonServiceClient, private route:ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }
  courseId;
  moduleId;
  lessonId;
  lessons = [];
  setParams(params)
  {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.loadLesson(this.moduleId);
  }
  loadLesson(moduleId)
  {
    this.moduleId =moduleId;
    this.myservice.findLessonsForModule(moduleId)
      .then(lessons => this.lessons = lessons);
    console.log(moduleId);
  }
  ngOnInit() {
  }

}
