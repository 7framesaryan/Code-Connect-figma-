import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Avatar } from '../../components/avatar/avatar';
import { Toggle } from '../../components/toggle/toggle';

@Component({
  selector: 'app-settings',
  imports: [FormsModule, Sidebar, Avatar, Toggle],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  fullName = 'Aryan Rana';
  email = 'aryan@pulse.app';

  notifications = [
    { label: 'Email Notifications', desc: 'Get notified about project updates', checked: true },
    { label: 'Push Notifications', desc: 'Receive push alerts on your device', checked: true },
    { label: 'Weekly Digest', desc: 'Summary of weekly activity', checked: false },
    { label: 'Marketing Emails', desc: 'Product updates and announcements', checked: false },
  ];
}
