import { Component, OnInit } from '@angular/core';
import {WidgetServiceClient} from '../services/WidgetServiceClient';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  constructor(private myservice: WidgetServiceClient , private route: ActivatedRoute ) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  topicId;
  widgets = [];
  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];
    this.loadWidgets(this.topicId);
  }
  loadWidgets(topicId) {
    this.topicId = topicId;
    this.myservice.findWidgetsForTopic(topicId)
      .then(widgets => this.widgets = widgets);
  }

  ngOnInit() {
  }

}
