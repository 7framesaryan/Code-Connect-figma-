import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Avatar } from '../../components/avatar/avatar';

@Component({
  selector: 'app-project-detail',
  imports: [Sidebar, Avatar],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  teamMembers = ['AR', 'AR', 'AR', 'AR'];

  tasks = [
    { label: 'Redesign hero section with new CTA', priority: 'High', priorityColor: 'red', done: false },
    { label: 'Update navigation component', priority: 'Medium', priorityColor: 'yellow', done: false },
    { label: 'Create blog post template', priority: 'High', priorityColor: 'red', done: false },
    { label: 'Implement dark mode toggle', priority: 'Low', priorityColor: 'green', done: false },
    { label: 'Optimize images for web', priority: 'Medium', priorityColor: 'yellow', done: false },
    { label: 'Set up analytics tracking', priority: 'Low', priorityColor: 'green', done: true },
    { label: 'Write homepage copy', priority: 'Medium', priorityColor: 'yellow', done: true },
  ];
}
