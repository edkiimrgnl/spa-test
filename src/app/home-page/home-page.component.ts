import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/interfaces';
import { AuthService } from '../shared/services/auth.service';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  users: User[] = []
  uSub: Subscription
  searchStr = ''

  constructor(
    private usersService: UsersService,
    public auth: AuthService
  ) { }
  
  ngOnInit() {
    this.uSub = this.usersService.getAll().subscribe(users => {
      this.users = users
    })
  }
  
  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe()
    }
  }

  sortById() {
    this.users.sort((a, b) => {
      return +a.id - +b.id
    })
  }
}
