import { Pipe, PipeTransform } from '@angular/core';
import { allValuesOf } from './allValuesOf';
import { loopOver } from './loopOver';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(users: any, keyword: string) {
    if (users.length == 0 || keyword.length == 0) {
      // console.log(users);
      // return users;
    }

    const fetchedUsers: any = [];
    keyword = keyword.toLocaleLowerCase();

    for (const user of users) {
      let searchable = loopOver(user).filter((objectValue: string) => {
        return objectValue.toString().toLocaleLowerCase().includes(keyword);
      });
      if (searchable.length != 0) {
        fetchedUsers.push(user);
        // console.log('searchable: ', searchable);
        // console.log('corresponding object: ', user);
      }
    }
    // console.log(fetchedUsers);
    return fetchedUsers;
  }
}
