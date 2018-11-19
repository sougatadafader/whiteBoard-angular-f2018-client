export class CourseServiceClient{
  Course_url = ' https://guarded-depths-89666.herokuapp.com/api/course';
  findAllCourses() {
    return fetch(this.Course_url+'s')
      .then(response => response.json());
  }
  findCourseById(courseId)
  {
    return fetch(this.Course_url + "/" + courseId)
      .then(response => response.json());
  }
}
