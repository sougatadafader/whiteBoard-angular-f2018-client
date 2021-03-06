import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CourseNavigatorServiceClient } from './services/CourseNavigatorServiceClient';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { CourseServiceClient } from './services/CourseServiceClient';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { routing } from './app.routing';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import {ModuleServiceClient} from "./services/ModuleServiceClient";
import {LessonServiceClient} from "./services/LessonServiceClient";
import {TopicServiceClient} from "./services/TopicServiceClient";
import {WidgetServiceClient} from "./services/WidgetServiceClient";
@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    CourseGridComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    WhiteBoardComponent,
    NavBarComponent,
    CourseViewerComponent
  ],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WidgetServiceClient,
    TopicServiceClient,
    LessonServiceClient,
    ModuleServiceClient,
    CourseServiceClient,
    CourseNavigatorServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
