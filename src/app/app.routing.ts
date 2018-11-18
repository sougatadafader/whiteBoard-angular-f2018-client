import { Routes, RouterModule } from '@angular/router';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {WidgetListComponent} from './widget-list/widget-list.component';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: WhiteBoardComponent},
  { path: 'course', component: CourseGridComponent },
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/module', component: ModuleListComponent },
  { path: 'module/:moduleId/lesson', component: LessonTabsComponent },
  { path: 'lesson/:topicId/topic', component: TopicPillsComponent },
  { path: 'topic/:widgetId/widget', component: WidgetListComponent },
  { path: '**' , component: WhiteBoardComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
