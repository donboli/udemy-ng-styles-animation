import { Component, OnInit, HostBinding } from '@angular/core';

import { routeFadeStateTrigger } from '../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [routeFadeStateTrigger({startOpacity: 0, duration: '100ms'})]
})
export class UsersComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
