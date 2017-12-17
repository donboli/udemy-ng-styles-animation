import { Component, OnInit, HostBinding } from '@angular/core';

import { routeSlideStateTrigger } from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routeSlideStateTrigger]
})
export class UsersComponent implements OnInit {
  @HostBinding('@routeSlideState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
