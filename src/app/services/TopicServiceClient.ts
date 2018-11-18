export class TopicServiceClient{
  LESSON_URL = 'http://localhost:9090/api/lesson/LESSON_ID/topic'
  findTopicsForLesson(lessonId)
  {
    return fetch(this.LESSON_URL.replace('LESSON_ID', lessonId))
      .then(response => response.json());
  }
}
