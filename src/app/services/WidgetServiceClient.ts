export class WidgetServiceClient{
  TOPIC_URL = ' https://guarded-depths-89666.herokuapp.com/api/topic/TOPIC_ID/widget'
  TOPIC_URL_ID = ' https://guarded-depths-89666.herokuapp.com/api/topic/TOPIC_ID/widget'
  findWidgetsForTopic(topicId)
  {
    return fetch(this.TOPIC_URL.replace('TOPIC_ID', topicId))
      .then(response => response.json());
  }
  findAllWidgets()
  {
    return fetch(' https://guarded-depths-89666.herokuapp.com/api/widgets')
      .then(response => response.json());
  }
  findWidgetsById(wid)
  {
    return fetch(this.TOPIC_URL_ID.replace('WIDGET_ID', wid))
      .then(response => response.json());
  }
}
