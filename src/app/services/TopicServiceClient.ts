export class TopicServiceClient{
  LESSON_URL = 'http://localhost:9090/api/lesson/LESSON_ID/topic'
  LESSON_URL_ID = 'http://localhost:9090/api/topic/TOPIC_ID'
  findTopicsForLesson(lessonId)
  {
    return fetch(this.LESSON_URL.replace('LESSON_ID', lessonId))
      .then(response => response.json());
  }
  findAllTopics()
  {
    return fetch('http://localhost:9090/api/topics')
      .then(response => response.json());
  }
  findTopicById(topicId)
  {
    return fetch(this.LESSON_URL_ID.replace('TOPIC_ID', topicId))
      .then(response => response.json());
  }
}
}
