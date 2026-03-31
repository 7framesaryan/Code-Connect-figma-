import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() activeItem: string = 'dashboard';

  navItems = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'Projects', route: '/project/1' },
    { label: 'Tasks', route: '/tasks' },
    { label: 'Team', route: '/team' },
    { label: 'Calendar', route: '/calendar' },
    { label: 'Messages', route: '/messages' },
  ];

  bottomItems = [
    { label: 'Settings', route: '/settings' },
    { label: 'Help', route: '/help' },
  ];
}
