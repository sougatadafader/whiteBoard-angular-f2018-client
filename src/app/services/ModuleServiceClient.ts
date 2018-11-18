export class ModuleServiceClient{
  MODULE_URL = 'http://localhost:9090/api/course/COURSE_ID/module'
  findModulesForCourse(courseId)
  {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
