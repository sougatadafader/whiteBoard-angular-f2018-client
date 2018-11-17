import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from "../services/CourseNavigatorServiceClient";

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  courses = [];

  constructor(private service: CourseNavigatorServiceClient) { }
  selectedCourseId = 0;
  selectedModuleId = 0;
  selectCourse(courseId) {
    this.selectedCourseId = courseId;
    this.service.findModulesForCourse(courseId)
      .then(modules =>
        this.modules = modules);
  }

  selectModule(moduleId) {
    this.selectedModuleId = moduleId;
    this.service.findLessonsForModule(moduleId)
      .then(lessons => {
        this.lessons = lessons;
      });
  }

  selectLesson(lessonId) {
    this.selectedLessonId = lessonId;
    this.service.findTopicsForLesson(lessonId)
      .then(topics => {
        this.topics = topics;
      });
  }

  selectTopic(topicId) {
    this.selectedTopicId = topicId;
    this.service.findWidgetsForTopic(topicId)
      .then(widgets => {
        this.widgets = widgets;
      });
  }



  ngOnInit() {
      this.service.findAllCourses()
        .then(courses => {
          console.log(courses)
          this.courses = courses;
        });

  }

}


