import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/interfaces';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../shared/services/users.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  user: User
  
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  
  ngOnInit() {
    
  }

}
