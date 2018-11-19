export class WidgetServiceClient{
  TOPIC_URL = 'http://localhost:9090/api/topic/TOPIC_ID/widget'
  findWidgetsForTopic(topicId)
  {
    console.log("tid"+topicId)
    return fetch(this.TOPIC_URL.replace('TOPIC_ID', topicId))
      .then(response => response.json());
  }
}
