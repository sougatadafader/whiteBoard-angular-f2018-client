export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch
    (' https://guarded-depths-89666.herokuapp.com/api/courses')
      .then(response => response.json());
  }
  findModulesForCourse(courseId) {
    return fetch(' https://guarded-depths-89666.herokuapp.com/api/course/'+ courseId + '/module')
      .then(response => response.json());
  }
  findLessonsForModule(moduleId) {
    return fetch
    (' https://guarded-depths-89666.herokuapp.com/api/module/'
      + moduleId + '/lesson')
      .then(response => response.json());
  }
  findTopicsForLesson(lessonId) {
    return fetch
    (' https://guarded-depths-89666.herokuapp.com/api/lesson/'
      + lessonId + '/topic')
      .then(response => response.json());
  }

  findWidgetsForTopic(topicId) {
    return fetch
    (' https://guarded-depths-89666.herokuapp.com/api/topic/'
      + topicId + '/widget')
      .then(response => response.json());
  }


}
