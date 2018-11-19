import { Component, OnInit } from '@angular/core';
import {TopicServiceClient} from "../services/TopicServiceClient";
import {ActivatedRoute} from "@angular/router";
import {LessonServiceClient} from "../services/LessonServiceClient";

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private myservice: TopicServiceClient , private route: ActivatedRoute ) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  topicId;
  topics = [];
  setParams(params)
  {
    console.log(params)
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];
    this.loadTopic(this.lessonId);
  }
  loadTopic(lessonId)
  {
    this.lessonId = lessonId;
    this.myservice.findTopicsForLesson(lessonId)
      .then(topics => this.topics = topics);
    console.log(lessonId);
  }

  ngOnInit() {
  }

}
