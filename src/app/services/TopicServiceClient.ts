export class TopicServiceClient{
  LESSON_URL = ' https://guarded-depths-89666.herokuapp.com/api/lesson/LESSON_ID/topic'
  LESSON_URL_ID = ' https://guarded-depths-89666.herokuapp.com/api/topic/TOPIC_ID'
  findTopicsForLesson(lessonId)
  {
    return fetch(this.LESSON_URL.replace('LESSON_ID', lessonId))
      .then(response => response.json());
  }
  findAllTopics()
  {
    return fetch(' https://guarded-depths-89666.herokuapp.com/api/topics')
      .then(response => response.json());
  }
  findTopicById(topicId)
  {
    return fetch(this.LESSON_URL_ID.replace('TOPIC_ID', topicId))
      .then(response => response.json());
  }
}
