import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ModuleServiceClient} from "../services/ModuleServiceClient";

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private myservice:ModuleServiceClient,private route:ActivatedRoute) {
    this.route.params.subscribe(params=>this.loadModules(params['courseId']));
  }
  courseId;
  modules = [];

  loadModules(courseId)
  {
     this.courseId = courseId;
     this.myservice.findModulesForCourse(courseId)
       .then(modules => this.modules = modules);
  }

  ngOnInit() {
  }

}
