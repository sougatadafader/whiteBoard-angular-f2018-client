export class CourseServiceClient{
  Course_url = 'http://localhost:9090/api/course';
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
