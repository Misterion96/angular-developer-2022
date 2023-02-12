import { Component, OnInit } from '@angular/core';

enum UserRole {
  ADMIN = 'sasdasd',
  USER = 'user',
  MODERATOR = 'modera222222tor',
}
@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent implements OnInit {
  public readonly userRoles = UserRole;
  public readonly userRole = UserRole.MODERATOR;

  constructor() {}

  ngOnInit() {}
}
