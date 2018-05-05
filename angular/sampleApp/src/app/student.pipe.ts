import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentFilter'
})
export class StudentPipe implements PipeTransform {

  transform(studentList: Array<any>, args?: any): any {
    if(!studentList) return [];
    return studentList.filter((studentObj)=> studentObj.isGeneral == args);
  }

}
