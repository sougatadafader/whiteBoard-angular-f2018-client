import { Routes, RouterModule } from '@angular/router';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {WidgetListComponent} from './widget-list/widget-list.component';
const appRoutes: Routes = [
  { path: 'course', component: CourseGridComponent },
  { path: 'course/:courseId/module', component: ModuleListComponent },
  { path: 'module/:moduleId/lesson', component: LessonTabsComponent },
  { path: 'lesson/:topicId/topic', component: TopicPillsComponent },
  { path: 'topic/:widgetId/widget', component: WidgetListComponent },
];
export const routing = RouterModule.forRoot(appRoutes);
