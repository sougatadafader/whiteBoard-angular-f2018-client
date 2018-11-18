export class CourseServiceClient{
  Course_url = 'http://localhost:9090/api/courses';
  findAllCourses() {
    return fetch(this.Course_url)
      .then(response => response.json());
  }
}
