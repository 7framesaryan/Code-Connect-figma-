import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Avatar } from '../../components/avatar/avatar';

@Component({
  selector: 'app-dashboard',
  imports: [Sidebar, Avatar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  stats = [
    { label: 'Active Projects', value: '12', change: '+3 this week', positive: true },
    { label: 'Tasks Done', value: '148', change: '+24 today', positive: true },
    { label: 'Team Members', value: '8', change: '+2 joined', positive: true },
    { label: 'Overdue', value: '3', change: '-1 from last week', positive: false },
  ];

  projects = [
    { badge: 'Design', title: 'Website Redesign', desc: 'Landing page and blog overhaul' },
    { badge: 'Development', title: 'Mobile App', desc: 'iOS and Android cross-platform' },
    { badge: 'Branding', title: 'Brand Kit', desc: 'Logo, colors, and guidelines' },
  ];
}
