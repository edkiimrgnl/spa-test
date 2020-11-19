import { Pipe, PipeTransform } from "@angular/core";
import { User } from './interfaces';

@Pipe({
  name: 'searchUser'
})
export class SearchPipe implements PipeTransform {
  transform(users: User[], search = ''): User[] {
    if (!search.trim()) {
      return users
    }

    return users.filter(user => {
      return user.username.toLowerCase().includes(search.toLowerCase())
    })
  }
}