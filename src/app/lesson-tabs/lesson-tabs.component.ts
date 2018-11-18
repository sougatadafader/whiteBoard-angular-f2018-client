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
    this.route.params.subscribe(params=>this.loadLesson(params['moduleId']))
  }
  moduleId;
  lessons = [];
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
