import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    const resultUsers = [];
    for (const user of value) {
      const fullname = user.first_name + user.last_name;
      if (fullname.toLowerCase().includes(arg.toLowerCase())) {
        resultUsers.push(user);
      }
    }
    return resultUsers;

  }

}
