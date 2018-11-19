export class LessonServiceClient{
  LESSON_URL = 'http://localhost:9090/api/module/MODULE_ID/lesson';
  LESSON_URL_ID = 'http://localhost:9090/api/lesson/LESSON_ID/lesson';
  findLessonsForModule(moduleId)
  {
    return fetch(this.LESSON_URL.replace('MODULE_ID', moduleId))
      .then(response => response.json());
  }
  findAllLessons()
  {
    return fetch('http://localhost:9090/api/lessons')
      .then(response => response.json());
  }
  findLessonById(lessonId)
  {
    return fetch(this.LESSON_URL_ID.replace('LESSON_ID', lessonId))
      .then(response => response.json());
  }s
}
