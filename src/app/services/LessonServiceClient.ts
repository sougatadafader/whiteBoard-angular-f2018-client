export class LessonServiceClient{
  LESSON_URL = ' https://guarded-depths-89666.herokuapp.com/api/module/MODULE_ID/lesson';
  LESSON_URL_ID = ' https://guarded-depths-89666.herokuapp.com/api/lesson/LESSON_ID/lesson';
  findLessonsForModule(moduleId)
  {
    return fetch(this.LESSON_URL.replace('MODULE_ID', moduleId))
      .then(response => response.json());
  }
  findAllLessons()
  {
    return fetch(' https://guarded-depths-89666.herokuapp.com/api/lessons')
      .then(response => response.json());
  }
  findLessonById(lessonId)
  {
    return fetch(this.LESSON_URL_ID.replace('LESSON_ID', lessonId))
      .then(response => response.json());
  }s
}
