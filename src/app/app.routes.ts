import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'project/:id', component: ProjectDetail },
  { path: 'settings', component: Settings },
];
