export class ModuleServiceClient{
  MODULE_URL = 'http://localhost:9090/api/course/COURSE_ID/module'
  MODULE_URL_ID = 'http://localhost:9090/api/module/MODULE_ID'
  findModulesForCourse(courseId)
  {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
  findAllModules()
  {
    return fetch('http://localhost:9090/api/modules')
      .then(response => response.json());
  }
  findModuleById(moduleId)
  {
    return fetch(this.MODULE_URL_ID.replace('MODULE_ID', moduleId))
      .then(response => response.json());
  }
}
