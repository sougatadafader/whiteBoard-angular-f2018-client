export class ModuleServiceClient{
  MODULE_URL = ' https://guarded-depths-89666.herokuapp.com/api/course/COURSE_ID/module'
  MODULE_URL_ID = ' https://guarded-depths-89666.herokuapp.com/api/module/MODULE_ID'
  findModulesForCourse(courseId)
  {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
  findAllModules()
  {
    return fetch(' https://guarded-depths-89666.herokuapp.com/api/modules')
      .then(response => response.json());
  }
  findModuleById(moduleId)
  {
    return fetch(this.MODULE_URL_ID.replace('MODULE_ID', moduleId))
      .then(response => response.json());
  }
}
